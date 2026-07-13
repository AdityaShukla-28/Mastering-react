import { useState } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) =>
     {
    e.preventDefault();
   
    const copyTask = [...task];
    copyTask.push({title, details});
    setTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");

  }
  

  return (
   <div className="bg-black lg:flex text-white h-screen  ">
    <form onSubmit={submitHandler} className="flex flex-col gap-5  items-start p-15  w-1/2 ">
        {/* FIRST ENTRY*/}
        <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" placeholder="Enter Notes Heading" 
        className='border-white  lg:w-full border-2 rounded px-5 py-2 w-full'></input>

        <textarea type="text" placeholder="Enter Notes Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
         className='border-white border-2 rounded px-5 py-2 w-full'></textarea>

        <button type="submit" 
        className='border-white active:bg-gray-300 border-2 bg-white text-black rounded px-5 py-2 w-full '> 
        Submit</button>

    </form>
     <div className='flex-wrap gap-5 p-15 lg:w-1/2 w-1/2 '>
     <h1 className='text-xl font-bold '>Your Notes</h1>
     <div className='flex flex-wrap gap-5'>
         
          {task.map(function (elem,idx){
            return(
              <div key={idx} className='border-white text-black rounded-2xl bg-amber-50 p-4  w-32 h-40 bg-cover bg-center
              bg-[url("https://pngtree.com/freepng/sticky-note-decorative-cartoon-illustration_5457916.html")]'>
                <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
                <p className  ="mt-2  font-small leading-tight ">{elem.details}</p>
                
              </div>
          )
          })}

     </div>
     
          
      </div>
   </div>
  )
}

export default App
