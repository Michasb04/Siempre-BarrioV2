import '../styles/NavStyles.css'
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <a href="#about"><h1 className='logo-text'>Siempre Barrio</h1></a>
        <ul>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button className="hamburguer-menu" id="menu-icon">
        <i className="ri-menu-3-line"></i>
      </button>  
      </div>
    </nav>
  );
};
export default Navbar;
