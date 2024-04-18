import './Styles/Skills.css'
import Html from '../../Image/imgHTML.svg';
import Css from '../../Image/imgCSS.svg';
import JavaScript from '../../Image/imgJavaScript.svg';
import ReactIMG from '../../Image/imgreact.svg';

function Skills(){

    return (

        <div id="Skills">

                <h1>Habilidades</h1>

                <h3>Conheça um pouco das minhas principais habilidades e conhecimentos.</h3>

                <div className='IMGSkills'>

                    <img className='imgHTML' src={Html} alt="HTML" />

                    <img className='imgCSS' src={Css} alt="CSS" />

                    <img className='imgJavaScipt' src={JavaScript} alt="JavaScript" />

                    <img className='imgReact' src={ReactIMG} alt="React" />

                </div>

        </div>
    )
}

export default Skills;