import { useState } from 'react'
import './App.css'
import NavBar from '../../components/NavBar/Navbar'
import Footer from '../../components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Footer />
    </>

  )
}

export default App
