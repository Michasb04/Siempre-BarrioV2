import '../styles/NavStyles.css'

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
      </div>
    </nav>
  );
};
export default Navbar;
