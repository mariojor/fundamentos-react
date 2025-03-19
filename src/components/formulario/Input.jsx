import { useState } from 'react'
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className='Input'>
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}> 
             <input value={valor} onChange={quandoMudar}/>{/* Controlado */}
            <input value={valor} readOnly/> {/* So leitura */}
            <input value={undefined} /> {/* Nao controlado */}
            </div>
        </div>
    )
}