import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()
// {
//     items: [],
//     getProductQuantity: () => { },
//     addToCart: () => { },
//     removeFromCart: () => { },
//     deleteFromCart: () => { },
//     getTotalCost: () => { }
// }

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState('')

    useEffect(() => {
        let existingCartItem = localStorage.getItem('cart')
        if (existingCartItem) setCart(JSON.parse(existingCartItem))


    }, [])


    useEffect(() => {
        calculateTotalPrice();
    }, [cart]);

    const calculateTotalPrice = () => {
        try {
            let total = 0;
            cart.forEach(item => {
                total += item.price;
            });
            setCartTotal(total);
        } catch (error) {
            console.log(error);
        }
    };

    // const value = {
    //     items: cart,
    //     getProductQuantity,
    //     addToCart,
    //     removeFromCart,
    //     deleteFromCart,
    //     getTotalCost
    // }
    return (
        // <CartContext.Provider value={value}>
        //     {children}
        // </CartContext.Provider>
        <CartContext.Provider value={[cart, setCart, cartTotal]}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook
export const useCart = () => useContext(CartContext)