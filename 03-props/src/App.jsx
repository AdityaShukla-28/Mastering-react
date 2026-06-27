import React from 'react'
import Card from './components/card'
import './App.css'

function App() {

  return (
    <div className="cards"> <Card name="Aditya Shukla" eng="Software" /> 
    <Card name="John Doe" eng="Web" />
    <Card name="Jane Smith" eng="Mobile"/>  
    </div>
   
  )
}

export default App
