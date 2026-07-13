import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [name,setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted by ' )
    
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)}}>
        <input 
      
        type="text" 
        placeholder="Enter your name" 
        value={name}

        onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
