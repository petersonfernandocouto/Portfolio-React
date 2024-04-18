import './Styles/Project.css'
import Cards from './elements/Card'
import IMGport from '../../Image/Port1.svg'
import insta from '../../Image/insta.png'
import CCXP from '../../Image/CCXP.png'
import Pastel from '../../Image/Pastel.png'

function Projects(){

    return (

        <div id="Projects">

            <h1>Projetos</h1>

            <Cards
                    title=" Landing Page - DNC"
                    tec='HTML, CSS e JS'
                    description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia'
                    link='https://github.com/petersonfernandocouto/landingPage'
                    img = {IMGport}
             />

            
            <Cards
                    title=" Instagram Page "
                    tec='HTML, CSS e JS'
                    description='Projeto pessoal de uma página do Instagram.'
                    link='https://github.com/petersonfernandocouto/Instagram'
                    img = {insta}
             />

            <Cards
                    title=" Event CCXP"
                    tec='HTML, CSS e JS'
                    description='Projeto pessoal de uma página do evento CCXP.'
                    link='https://github.com/petersonfernandocouto/WebProject-Preview'
                    img = {CCXP}
             />

            <Cards
                    title=" Pastel de Ideias"
                    tec='HTML, CSS, JS e Vue'
                    description='Projeto construído para a empresa Thutor'
                    link='https://github.com/petersonfernandocouto/Project-Challenge'
                    img = {Pastel}
             />


        </div>
    )
}

export default Projects;