import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";

export default function Home({ product }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '646fdf84ce5511a8a948ef21';
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  }
}