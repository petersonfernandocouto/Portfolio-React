import './Styles/Presentation.css';
import React, { useEffect, useState, useMemo } from 'react';

function Presentation() {

    const [text, setText] = useState('');
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    const toRotate = useMemo(() => ['Peterson Couto!', 'Desenvolvedor Front End'], []);

    useEffect(() => {
        const toType = () => {
            let i = loop % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop + 1);
            }
        };

        let ticker = setInterval(() => {
            toType();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, loop, isDeleting, toRotate, period]);


    return (

        <div id="Presentation">

            <h2>Bem-vindo ao meu Portfólio</h2>

            <h1>Olá, eu sou {text}</h1>

            <p>
                Sou um entusiasta fervoroso da tecnologia e das soluções inovadoras <br /> que ela proporciona. Com proficiência em HTML, CSS, JavaScript e React, <br /> desenvolvi projetos pessoais com APIs e estou constantemente <br /> buscando desafios para superar. Meu compromisso é transformar ideias <br /> em realidade, criando experiências digitais envolventes e funcionais.<br /> Seja desenvolvendo projetos pessoais ou colaborando em iniciativas <br /> empresariais, estou empolgado para enfrentar novos desafios e <br /> contribuir para o crescimento do seu projeto.
            </p>

            <br />

            <a href='https://WA.me/5519991955915' target='_blank' rel='noopener noreferrer'>

                <button>Conecte-se comigo!</button>
                
            </a>
        </div>
    );
}

export default Presentation;
