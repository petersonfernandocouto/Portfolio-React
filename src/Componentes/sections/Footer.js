import './Styles/Footer.css'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return (
        
        <div className="FooterStyle">

                <div className="FooterInformation">

                    <ul>

                        <li> <a href='https://WA.me/5519991955915' target='_blank' rel='noopener noreferrer'> <FaWhatsapp size={35} /> </a>  </li>

                        <li> <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/' target='_blank' rel='noopener noreferrer'> <FaLinkedin size={35}/> </a>  </li>

                        <li> <a href='https://github.com/petersonfernandocouto' target='_blank' rel='noopener noreferrer'> <FaGithub size={35}/> </a> </li>

                    </ul>

                    <p>peterson_fernando16@hotmail.com</p>

                    <p>Peterson Fernando Couto © 2024</p>

                </div>

        </div>
    )
}

export default Footer