import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        let existingCartItem = localStorage.getItem('cart')
        if (existingCartItem) setCart(JSON.parse(existingCartItem))
    }, [])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook
export const useCart = () => useContext(CartContext)