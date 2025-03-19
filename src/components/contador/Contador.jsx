import { Component } from "react";
import "./Contador.css";

class Contador extends Component {

    state = {
        numero: this.props.valorInicial || 0,
        passo: this.props.passo || 5
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        });
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo </label>
                    <input id="passoInput" type="number"
                        value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={_ => this.dec()}>-</button>
            </div>
        );
    }
}

export default Contador