import '../styles/Products.css'
import Cards from "./Cards";

const Products = () =>  {
    return(

        <section className="section-products">
            <div id="products">
            <div className="container">
                <h2>¿Qué puedes encontrar?</h2>
                <p>En Siempre Barrio encontrarás camisetas 👕 para hombre y mujer, gorras 🧢, gafas 🕶️, pantalones 👖 y accesorios 👜 que gritan estilo 🔥. Nuestras prendas están inspiradas en la vida urbana 🏙️: auténticas, cómodas y perfectas para tu día a día 💯.</p>
        </div>

        <div>
            <Cards/>
        </div>
    </div>
    </section>
    );
};

export default Products;