import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

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
    return (
        <CartContext.Provider value={[cart, setCart, cartTotal]}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook
export const useCart = () => useContext(CartContext)