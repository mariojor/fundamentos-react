export default function ComParametros(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>Nome: {props.aluno}</h3>
            <p>Nota do Aluno: {props.nota}</p>
            <p>Status: {status}</p>
        </div>
    )
}