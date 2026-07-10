import { useState } from 'react'
import Hook1 from './components/hook-1'
import Practice from './components/practice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Practice />
    </>
  )
}

export default App
