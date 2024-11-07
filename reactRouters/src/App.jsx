import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom'

const Home = () => <h1>hola</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnitas',
    'quesadilla'
  ]

  return (
    <div>
      <h1>Search page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )

}

const Tacos = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Tacos</h1>
      {name}
      <br />
      <Link to='details'>Ir a los detalles</Link>
      <Outlet />
    </div>
  )
}

const TacoDetails = () => {
  const { name } = useParams()

  return (
    <div>
      <h1>Taco details {name}</h1>
    </div>
  )
}

function App() {

  return (
    <div className='App' >
      <header>
        <h1>miducholla 😂</h1>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/search-page'>Seatch page</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/tacos/:name' element={<Tacos />} >
          <Route path='details' element={<TacoDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
