import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './Componentes/sections/Navbar';
import Presentation from './Componentes/sections/Presentation';
import Skills from './Componentes/sections/Skills';
import Projects from './Componentes/sections/Projects'
import Footers from './Componentes/sections/Footer'
import GitButton from './Componentes/sections/GitButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

    <NavBar />

    <Presentation />

    <Skills />

    <Projects />

    <GitButton
    link='https://github.com/petersonfernandocouto?tab=repositories' />

    <Footers />

  </React.StrictMode>
);


reportWebVitals();
