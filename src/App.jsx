import {useState} from "react";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";

import {generarId} from "./helpers/index.js";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastos, setGastos] = useState([]);

    const handleNuevoGasto = () => {
        setModal(true);
        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
    }

    const guardarGasto = (gasto) => {
        gasto.id = generarId();
        setGastos([...gastos, gasto]);

        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    return (
        <>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto && (
                <div className="nuevo-gasto">
                    <img
                        src={IconoNuevoGasto}
                        alt=""
                        onClick={handleNuevoGasto}
                    />
                </div>
            )}
            {modal &&
                <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                />
            }

        </>
    )
}

export default App