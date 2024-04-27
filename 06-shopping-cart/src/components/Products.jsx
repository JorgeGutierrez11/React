import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../Hooks/useCart.js'

export function Products({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = products => {
        return cart.some(item => item.id == products.id)  // Retorna un valor de true al tener elementos en la matris cart
    }

    return (
        <main className='products'>
            <ul>
<<<<<<< HEAD
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                    style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                                    onClick={() => {
                                        isProductInCart ? removeFromCart(product) : addToCart(product)
                                    }}>
                                    { isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                                </button>
                            </div>
                        </li>
                    )
                })}
=======
                {products.slice(0,10).map(product => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                         <div>
                            <button>
                                <AddToCartIcon/>
                            </button>
                         </div>
                    </li>
                ))}
>>>>>>> 4e993bac3a5ac0228d99751461b0ae5670fc1f5c
            </ul>
        </main>
    )
}