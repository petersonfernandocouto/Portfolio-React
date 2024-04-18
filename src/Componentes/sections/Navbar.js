import './Styles/NavBar.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; //estes icones foram tirados de "https://react-icons.github.io/react-icons/icons/fa/"
import Nav from 'react-bootstrap/Nav' // esse import faz com que quando eu clico em alguma <li> vá para 'pagina' ou local dos seus respectivos lugares (em caso de uma pagina unica), essa biblioteca pode ser baixada em seu terminal(entre na sua pasta de desenvolvimento e coloque " npm install react-bootstrap bootstrap ")

function NavBar(){

    return(

        <div className='navbar'> 

            <ul>
                <li> <Nav.Link href='#Presentation'> Apresentação </Nav.Link> </li>
                <li> <Nav.Link href='#Skills'> Habilidades </Nav.Link></li>
                <li> <Nav.Link href='#Projects'> Projetos </Nav.Link></li>
            </ul>

            <ul>
                <li> <a href='https://www.instagram.com/petersonfernando17/' target='_blank' rel='noopener noreferrer'> <FaInstagram size={35} /> </a>  </li>
                <li> <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/' target='_blank' rel='noopener noreferrer'> <FaLinkedin size={35}/> </a>  </li>
                <li> <a href='https://github.com/petersonfernandocouto' target='_blank' rel='noopener noreferrer'> <FaGithub size={35}/> </a> </li>
            </ul>


        </div>
    )
}

export default NavBar;

// o "rel='noopener noreferrer'" dentro de <a href=>Isso é importante para proteger contra ataques de janela secundária que podem ser usados para roubar informações do seu site. e caso vc não o coloque ficará informando que o codigo está sendo má usada