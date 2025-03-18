import React from "react";

import "./App.css";
import ComParametros from './basicos/ComParametros';
import Fragmento from './basicos/Fragmento';
import Primeiro from './basicos/Primeiro';
import Aleatorio from "./basicos/Aleatorio";
import Card from "./layout/Card";
import Familia from "./basicos/Familia";
import FamiliaMembro from "./basicos/FamiliaMembro";
import ListaAlunos from "./repeticao/ListaAlunos";
import TabelaProdutos from "./repeticao/TabelaProdutos";
import ParOuImpar from "./condicional/ParOuImpar";
import UsuarioInfo from "./condicional/UsuarioInfo";
import DiretaPai from "./comunicacao/DiretaPai";

export default _ =>
    <div className='App'>

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#9 Comunicação Direta" color="#8BAD39">
                <DiretaPai />
            </Card>
            <Card titulo="#8 Redenrizacao Condicional" color="#982395">
               <ParOuImpar numero={1} />
               <UsuarioInfo usuario={{ nome: 'Mario' }} />
               <UsuarioInfo usuario={{ nome: '' }} />
               <UsuarioInfo usuario={{  }} />
               <UsuarioInfo usuario={{ nome: 'Jow' }} />
            </Card>
            <Card titulo="#07 Desafio Repeticao" color="#FF4C65">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 Repeticao" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Paixao">
                    <FamiliaMembro nome="Mario" />
                    <FamiliaMembro nome="Klecia" />
                    <FamiliaMembro nome="Mario Filho" />
                </Familia>
            </Card>
            <Card titulo="#04 Exemplo de Card" color="#FA6900">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 Com Parâmetros" color="#E8B71A">
                <ComParametros titulo="Esse é o título" aluno="Mario" nota={2} />
            </Card>
            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>

    </div>
