<<<<<<< HEAD
import { useId } from 'react'
=======
import { useState, useId } from 'react'
>>>>>>> 4e993bac3a5ac0228d99751461b0ae5670fc1f5c
import './Filters.css'
import { useFilter } from '../Hooks/useFilters.js'

<<<<<<< HEAD
export function Filters() {
    const {filters,setFilters} = useFilter() // Filtros

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

  /*   console.log({minPriceFilterId, categoryFilterId}) */
=======
export function Filters({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    console.log({minPriceFilterId, categoryFilterId})
>>>>>>> 4e993bac3a5ac0228d99751461b0ae5670fc1f5c

    const handleChangeMinPrice = () => {
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value = {filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='fragrances'>Perfumes</option>
                </select>
            </div>
        </section>
    )
}