import '../styles/Footer.css'

const Footer = () =>{
    return(
        <footer>
            <div className="social-media-footer">
                <div className='icons-footer'>
                <a href="https://github.com/Michasb04" target='blank' rel="noopener noreferrer">
                    <img src='/github.svg' alt="Logo Github" />
                </a>
                <a href="https://www.linkedin.com/in/michael-rodríguez-rocha/" target='blank' rel="noopener noreferrer">
                    <img src='/linkedin.svg' alt="Logo linkedin"/></a>
                </div>
            <span>Diseñado por:</span>
            <p>💜 Michael Rodriguez 💜</p>
            </div>
        </footer>
    )
}

export default Footer