import '../styles/Contact.css'
const contact = () => {
    return (
      <>
      <div id="contact">
      <div className='contact-text'>
        <h2 className="title-contact">¡Hablemos!</h2>
        <p>¿Tienes preguntas sobre nuestros productos, envíos o próximos eventos? Estamos aquí para ayudarte.</p>
        <p>📩 Rellena el formulario y te responderemos lo más pronto posible.</p>
        <p>📞 Prefieres hablar directamente? Llámanos o envíanos un mensaje al DM.</p>
        <p>Queremos escucharte y ayudarte a encontrar lo que necesitas. ¡Contáctanos ahora!</p>
      </div>
            <form action="">
              <div className='label-content'>
                <label htmlFor="name">Nombre:</label>
                <input 
                type="text" 
                id="name"
                name="name"
                placeholder='Ingresa tu nombre'
                required
                />
              </div>

              <div className='label-content'>
                <label htmlFor="email">Correo eléctronico:</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder='example@gmail.com'
                required
                />
              </div>

              <div className='label-content'>
                <label htmlFor="message">Mensaje:</label>
                <textarea
                id="message"
                name="message">                
                </textarea>
              </div>
            <button type="submit">Enviar</button>
            </form>
      </div>

    </>
    );
};
export default contact;
  

  