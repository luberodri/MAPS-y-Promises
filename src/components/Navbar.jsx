import Carticon from "./Carticon"
import Cardicon from "./Carticon"

const Navbar = () => {

    return (
        <div>
            <nav className="menu"> 
            <img src="/logo.png" alt="logo" className= "logo"/>
        <a className= "Links" href="#"><li>Inicio</li></a>
        <a className= "Links" href="#"><li>Productos</li></a>
        <a className= "Links" href="#"><li>Quienes Somos</li></a>
        <a className= "Links" href="#"><li>Contacto</li></a>
        <Carticon count={9}></Carticon>  
      </nav>
        </div>
        
      
    )
}


      
export default Navbar