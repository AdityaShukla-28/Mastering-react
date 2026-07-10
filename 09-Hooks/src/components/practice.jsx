import react, { useState } from 'react'

const Practice = () => {
  const [num, setnum] = useState(0)
  //num is read only variable and setnum(read only) is function to change the value of num
  const changeNum = () => {
    setnum(num+1)//changing the value of num to 20 after clicking the button   
  }
  const changeNum1 = () => {
    setnum(num-1)//changing the value of num to 20 after clicking the button   
  }
    return(
          <>
    <button onClick={changeNum}>click me </button> 
    <button onClick={changeNum1}>click me </button>
    <button>{num}</button>
    </>
    
    )
}
export default Practice    