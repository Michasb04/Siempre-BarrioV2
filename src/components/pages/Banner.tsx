import '../styles/Banner.css'
import logoInstagram from '../img/social-media/instagram.png'
import logoTiktok from '../img/social-media/tiktok.png'
const Barinfo = () =>{
    return(
        <div className="banner-content">
            <p className='Separated'>💥</p>
            <a href="https://www.instagram.com/siemprebarrio_/" target='blank' rel="noopener noreferrer">
                <h3><img src={logoInstagram} alt="" />@siemprebarrio_</h3>
            </a>

            <p className='Separated'>💥</p>
            <a href="https://www.tiktok.com/@siemprebarrio_" target='blank' rel='nooopener noreferrer'> 
            <h3><img src={logoTiktok} alt="" />@siemprebarrio_</h3>            
            </a>
            <p className='Separated'>💥</p>
        </div>
    )
}

export default Barinfo