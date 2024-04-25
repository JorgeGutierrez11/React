import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'

// Componentes
import { Products } from './components/Products.jsx'
import { Filters } from './components/Filters.jsx'
import { Header } from './components/Header.jsx'

function App() {
  const [products] = useState(initialProducts)

  const [filters, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category == 'all' ||
          product.category == filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilter}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
