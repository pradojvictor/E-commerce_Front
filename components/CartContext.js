const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        if (cartProducts?.length > 0) {
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts, ls]);
    useEffect(() => {
        if (ls && ls.getItem('cart')) {
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    }, [ls]);

    function addProduct(productId) {
        setCartProducts(prev => [...prev, productId]);
    }
    function removeProduct(productId) {
        setCartProducts(prev => {
            const position = prev.indexOf(productId);
            if (position !== -1) {
                return prev.filter((value, index) => index !== position);
            }
            return prev;
        });
    }
    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct }}>
            {children}
        </CartContext.Provider>
    );
}

//9:02:40 filter()
//add ls in [ls]
