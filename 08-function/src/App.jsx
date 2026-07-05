
import './App.css'

function App() {
  const inputChange = (val) => {
    console.log(val);
  }

  return (
    <>
      <input
        onChange={function (elem){
          inputChange(elem.target.value);
        }}
        type="text"
        placeholder="Type something..."
      />
    </>
  )
}

export default App
