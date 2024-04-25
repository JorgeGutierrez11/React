import { useState } from 'react'
import './Filters.css'

export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = () => {
        //Algo esta mal (Dos fuentes de la verdad)
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        //Algo esta mal (Dos fuentes de la verdad)
        onChange(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio</label>
                <input
                    type="range"
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='fragrances'>Perfumes</option>
                </select>
            </div>
        </section>
    )
}