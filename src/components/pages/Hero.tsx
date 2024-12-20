import '../styles/Hero.css'
import Presentacion from '../img/Hero/Presentacion.png';
import Banner from './Banner';

const Hero = () => {
    return (
      <>
      <section className='hero'>
        <div id="about">
          <div className='container'>
            <div className="hero-text">
              <h1>¿Quiénes Somos?</h1>
                <p>Más que ropa, somos cultura. Desde las calles de Bogotá, traemos prendas que capturan la esencia y actitud de los jóvenes del barrio. Encuentra camisas, pantalones, accesorios y mucho más que gritan autenticidad.</p><br />
                <p>No somos solo una tienda. Organizamos eventos de rap que celebran la creatividad del barrio:
              🎤 Música en vivo
              🎨 Graffiti en acción
              🎁 Sorteos exclusivos</p>
            <a href="https://www.instagram.com/siemprebarrio_/" target='blank' rel='noopener noreferrer'>
            👉 Explora nuestra colección ahora 👈</a>
            </div>
          <div className='hero-img'>
            <img
              src={Presentacion} alt="Logo Siempre Barrio" />
            </div>
          </div>
      <Banner/>
        </div> 
      </section>
    </>  
    );
  };
  export default Hero;
  