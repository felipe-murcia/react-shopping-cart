import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardProduct from './components/CardProduct/CardProduct'
import Header from './components/Header/Header'
import { SectionProduct } from './components/SectionProduct/SectionProduct'
import Main from './page/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}

export default App
