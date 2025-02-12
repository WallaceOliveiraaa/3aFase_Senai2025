
// rfce
// rafce

import { useState } from "react"
import './Demo2.css'
import Usuario from './Usuario';

function Demo2 () {
    const [valor, setValor] = useState (0)
    const [usuario, setUsuario] = useState('')

    return (
        <div className="container-demo2">
            <h2>Soma</h2>
            <button onClick={() => {setValor(valor - 1)}}>-</button>
            {valor}
            <button onClick={() => {setValor(valor + 1)}}>+</button>

            <button onClick={() => {setUsuario(prompt("Username:"))}}> Entrar </button>
            {/* {usuario && <p>Olá {usuario}!</p>} */}

            {usuario ? <p>Olá {usuario}!</p> : <p>Obrigatório entrar</p>}

            {/* <Usuario username = {usuario} /> */}

            {usuario && <Usuario username = {usuario} />}

        </div>
    )
}

export default Demo2;