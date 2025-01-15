import '../styles/Card.css'
import product1 from '../img/products/Candongas.png';
import product2 from '../img/products/Camisas de mujer.png';
import product3 from '../img/products/Chaquetas.png';
import product4 from '../img/products/Gorras.png';
import product5 from '../img/products/Camisas.png';
import product6 from '../img/products/Spray.png';


const ImgProductos = () =>{
    return(
    <>
    <div className='cards-container'>
        <div className="card">
            <img src={product1} alt="Candongas" />
            <div className="card-content">
                <h3>"Estilo que se vive en las calles"</h3>
                <p>Descubre nuestras camisetas 👕, gorras 🧢, gafas 🕶️ y más. Prendas urbanas diseñadas para marcar la diferencia ✨ en cada esquina.</p>
            </div>
        </div>
        <div className="card">
            <img src={product2} alt="Candongas" />
            <div className="card-content">
                <h3>"Vístete con la esencia del barrio"</h3>
                <p>Ropa auténtica 💯, cómoda 🛋️ y con actitud 💪. Desde Bogotá 🌎 para el mundo.</p>
            </div>
        </div>
        <div className="card">
            <img src={product3} alt="Candongas" />
            <div className="card-content">
                <h3>"La cultura urbana en cada detalle"</h3>
                <p>Explora nuestra colección 🛍️: camisetas 👕, pantalones 👖, accesorios 🎒 y todo lo que necesitas para llevar tu estilo al siguiente nivel 🚀.</p>
            </div>
        </div>
        <div className="card">
            <img src={product4} alt="Candongas" />
            <div className="card-content">
                <h3>"Prendas que cuentan historias"</h3>
                <p>Cada diseño refleja el ritmo 🎶, la energía ⚡ y el arte de la calle 🏆. Encuentra lo que te define 🖤.</p>
            </div>
        </div>
        <div className="card">
            <img src={product5} alt="Candongas" />
            <div className="card-content">
                <h3>"Tu estilo, tu regla"</h3>
                <p>Gorras 🧢, gafas 🕶️, camisetas 👕 y más, porque el estilo urbano no sigue normas 🚫, las impone 👑.</p>
            </div>
        </div>
        <div className="card">
            <img src={product6} alt="Candongas" />
            <div className="card-content">
                <h3>"Lleva el ritmo de la calle contigo"</h3>
                <p>Cada prenda está hecha para moverte con actitud y libertad. Camina, baila y vive al compás de la moda urbana. 🎶👟</p>
            </div>
        </div>        
    </div>
    </>  
    )
}

export default ImgProductos;