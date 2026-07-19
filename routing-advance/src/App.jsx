import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import './App.css'
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"

function App() {
 

  return (
    <div className="h-screen bg-black text-white">
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
    </div>
  )
}

export default App
