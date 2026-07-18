import {Link} from 'react-router-dom'
const Nav =() =>{
    return(
    
        <div className="Nav">
        
       <Link to='/'>Home</Link>
       <Link to='/Contact'>Contact</Link>
       <Link to='/About'>About</Link>
       
   
        </div>
  )
}
export default Nav