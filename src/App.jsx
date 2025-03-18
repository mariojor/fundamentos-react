import React from "react";

import ComParametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Primeiro from './components/basicos/Primeiro';

export default _ =>
    <div id='app'>
        <Fragmento />
        <ComParametros titulo="Esse é o título" aluno="Mario" nota={2} />
        <Primeiro />
    </div>
