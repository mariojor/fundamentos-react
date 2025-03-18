import React from 'react';
import ReactDOM from 'react-dom/client'; //Import correto para react 18
import Primeiro from './components/basicos/Primeiro';
import './index.css';
import ComParametros from './components/basicos/ComParametros';
//react 18 removou essa forma de fazer a renderização
// ReactDOM.render("Olá, mundo!", document.getElementById('root'));


ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <div>
            <Primeiro />
            <ComParametros titulo="Esse é o título" aluno="Mario" nota={2} />
        </div>); //renderizando o elemento criado acima

