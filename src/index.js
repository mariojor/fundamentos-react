import React from 'react';
import ReactDOM from 'react-dom/client'; //Import correto para react 18
import Primeiro from './components/basicos/Primeiro';
import './index.css';
import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
//react 18 removou essa forma de fazer a renderização
// ReactDOM.render("Olá, mundo!", document.getElementById('root'));


ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <div id='app'>
            <Primeiro />
            <ComParametros titulo="Esse é o título" aluno="Mario" nota={2} />
            <Fragmento />
        </div>); //renderizando o elemento criado acima

