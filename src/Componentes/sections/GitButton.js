import Botao from "./elements/Buttons"
import './Styles/GitButton.css'

function GitButton({link}){

    return(

        <div className="botao">

                <a href={link} target="_blank" rel='noopener noreferrer'> 

                    <Botao text={'Acesse Meu Repositório'} />

                </a>

                
        </div>
        
        

    )
}

export default GitButton