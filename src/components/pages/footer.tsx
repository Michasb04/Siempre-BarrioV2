import '../styles/Footer.css'
import LogoGithub from '../img/social-media/github.png'
import LogoLinkedin from '../img/social-media/linkedin.png'

const Footer = () =>{
    return(
        <footer>
            <div className="social-media-footer">
                <div className='icons-footer'>
                <a href="https://github.com/Michasb04" target='blank' rel="noopener noreferrer">
                    <img src={LogoGithub} alt="Logo Github" />
                </a>
                <a href="https://www.linkedin.com/in/michael-rodríguez-rocha/" target='blank' rel="noopener noreferrer">
                    <img src={LogoLinkedin} alt="Logo linkedin"/>
                </a>
                </div>
            <span>Diseñado por:</span>
            <p>💜 Michael Rodriguez 💜</p>
            </div>
        </footer>
    )
}

export default Footer