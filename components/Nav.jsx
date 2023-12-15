import { Link } from 'react-router-dom';

function Nav(){
    return (
        
    <nav className="nav"> 
        <Link className="nav-icon" to = "/"> Home </Link> 
        <Link className="nav-icon" to = "/topics"> Topics </Link>   
         <Link className="nav-icon" to = "/articles"> Articles </Link> 
    </nav>
    )
}

export default Nav