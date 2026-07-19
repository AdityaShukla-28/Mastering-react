import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
const Navbar = () =>{
    return(
        <div className="flex justify-between p-7 bg-cyan-900 ">
            <h2 className="text-xl font-bold">Aditya</h2>
            <div className="flex  gap-5 ">
                <a className="text-xl font-bold" href="/About">About</a>
                <a className="text-xl font-bold" href="/">Home</a>
                <a className="text-xl font-bold" href="/Contact">Contact</a>
            </div>
        </div>
    )
}
export default Navbar