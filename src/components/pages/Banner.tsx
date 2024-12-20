import '../styles/Banner.css'
const Barinfo = () =>{
    return(
        <div className="banner-content">
            <p className='Separated'>💥</p>
            <a href="https://www.instagram.com/siemprebarrio_/" target='blank' rel="noopener noreferrer">
                <h3><img src="/instagram.svg" alt="" />@siemprebarrio_</h3>
            </a>

            <p className='Separated'>💥</p>
            <a href="https://www.tiktok.com/@siemprebarrio_" target='blank' rel='nooopener noreferrer'> 
            <h3><img src="/tiktok.svg" alt="" />@siemprebarrio_</h3>            
            </a>
            <p className='Separated'>💥</p>
        </div>
    )
}

export default Barinfo