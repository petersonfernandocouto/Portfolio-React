import '../elements/Cards.css'
import Botao from './Buttons';
import {useState} from 'react'

function Cards({title, tec, description, link, img}){

    const [info, setInfo] = useState(false)

    function InfoOn(){
        setInfo(true)
    }

    function InfoOff(){
        setInfo(false)
    }

    return (

        <div id='Cards' onMouseLeave={InfoOff}>

            <img src={img} alt="Port1" onMouseEnter={InfoOn}></img>

            
            {info === true &&(
                <section id='Info'>

                    <h3>{title}</h3>

                        <p><b>Tecnologia:</b> {tec}</p>    

                        <p>{description}</p>

                        <a href={link} target="_blank" rel='noopener noreferrer'> 

                            <Botao text={'Acesse o Repositório'} />

                        </a>
                        

                </section>
            )}



        </div>
    )
}

export default Cards;

// a linha de codigo "info === true &&" está verificando se a condição é True. e o "&&" só acontece se a condição da esquerda for verdadeira