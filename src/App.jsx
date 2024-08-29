import { useState } from 'react'
import Product from './pages/Product'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Product />
    </>
  )
}

export default App
