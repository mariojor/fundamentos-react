import React from "react";

import "./App.css";
import ComParametros from './basicos/ComParametros';
import Fragmento from './basicos/Fragmento';
import Primeiro from './basicos/Primeiro';
import Aleatorio from "./basicos/Aleatorio";
import Card from "./layout/Card";
import Familia from "./basicos/Familia";

export default _ =>
    <div className='App'>

        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#05 Componentes com Filhos" color="#00C8F8">
                <Familia />
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
