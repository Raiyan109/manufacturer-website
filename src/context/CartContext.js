import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        let existingCartItem = localStorage.getItem('cart')
        if (existingCartItem) setCart(JSON.parse(existingCartItem))

        const totalPrice = () => {
            try {
                let total = 0
                cart?.map(item => {
                    total = total + item.price
                })
                return total.toLocaleString("en-US", {
                    style: 'currency',
                    currency: "USD"
                })
            } catch (error) {
                console.log(error);
            }
        }
    }, [])

    const info = {

    }
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook
export const useCart = () => useContext(CartContext)