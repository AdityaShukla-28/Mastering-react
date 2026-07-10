import raect ,{ useState } from 'react'

const Hook1 = () => {
  const [num, setnum] = useState(0)
  //num is read only variable and setnum(read only) is function to change the value of num

  const changeNum = () => {
    setnum(20)//changing the value of num to 20 after clicking the button
  }
  
  return(
    <>
    <h1>this line will change {num} after clicking </h1>// displaying the value of num in h1 tag
    <button onClick={changeNum}>click me</button>//button to change the value of num
    </>

  )
}    
export default Hook1    