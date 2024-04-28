import { useState, useId } from 'react'
import './Filters.css'
import { useFilter } from '../Hooks/useFilters.js'

export function Filters({ onChange }) {
    const {filters,setFilters} = useFilter() // Filtros

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
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
