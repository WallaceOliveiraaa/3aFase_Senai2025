import './Demo1.css';
import { FcCommandLine } from "react-icons/fc";

function Demo1() {
    function responderClique(){
        alert('Parabéns, você clicou!')
    }

    const tratarEntrada = () => [

    ]

    return(
        <div className='container-demo1'>
            <button onClick={responderClique}> Clique aqui </button>
            <button onClick={() => {alert ('Eu nasci de uma arrow function!')}}> 🤖 </button>

            <img className='img-dev' src="./imagens/Programmer-cuate.svg" alt="" />

            <FcCommandLine />

        </div>
    )
};

export default Demo1;