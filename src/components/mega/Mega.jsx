import { useState } from "react";
import './Mega.css';

export default props => {

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0) // Preenche o array com 0
            .reduce((nums) => { // Reduz o array
                const novoNumero = gerarNumeroNaoContido(1, 60, nums); // Gera um número não contido no array
                return [...nums, novoNumero]; // Adiciona o novo número ao array
            }, [])
            .sort((n1, n2) => n1 - n2); // Ordena os números

        return numeros; // Retorna o array de números
    }

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min; // Gera um número aleatório
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio; // Recursividade
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return (
        <div className="Mega">
            <h2>MEGA</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Numeros</label>
                <input
                    min="6"
                    max="15"
                    type="number" value={qtde} onChange={e => {
                        setQtde(+e.target.value);
                        setNumeros(gerarNumeros(+e.target.value));
                    }} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    );
}