import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret = "whsec_62fbda06dc32e41395e069295a3e3b0bae0545d26fe3f829fe1c79d1856c78ed";

export default async function handler(req, res) {
  await mongooseConnect();
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === 'paid';
      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  res.status(200).send('ok');
}

export const config = {
  api: { bodyParser: false, }
}
//cli stripe "regard-pepped-woo-avid"
//acct_1NSOQmIHTnCGfakI

