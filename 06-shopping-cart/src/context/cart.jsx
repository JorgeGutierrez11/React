import { createContext, useState } from 'react'

export const CartContext = createContext()

const initialState = []
const reducer = (state, action) => {
    
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        /* Check if the product is alredy in the cart */
        const productInCartIndex = cart.findIndex(item => item.id == product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(
            prevState => ([
                ...prevState,
                {
                    ...product,
                    quantity: 1
                }
            ])
        )
    }

    const removeFromCart = (product) => {
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}