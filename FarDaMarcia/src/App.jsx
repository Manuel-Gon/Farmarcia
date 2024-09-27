import { useState } from 'react'

import './App.css'
import Body from './components/Body'
import NavBar from './components/NavBar'
import PaginaUm from './components/PaginaUm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <NavBar />
       
      <PaginaUm />
      
      <Body />
    </>
  )
}

export default App
