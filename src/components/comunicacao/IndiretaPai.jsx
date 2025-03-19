import IndiretaFilho from "./IndiretaFilho";
import { useState } from "react";

export default props => {

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        setIdade(idadeParam)
        setNome(nomeParam)
        setNerd(nerdParam)
    }

    return (
        <div>
           <span>Pai</span>
           <span> <strong>{idade}</strong></span>
           <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
           <IndiretaFilho quandoClicar={fornecerInformacoes} />
        </div>
    )
}