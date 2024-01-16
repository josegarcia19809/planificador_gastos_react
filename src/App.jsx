import {useState, useEffect} from "react";
import Header from "./components/Header.jsx";
import Modal from "./components/Modal.jsx";
import ListadoGastos from "./components/ListadoGastos.jsx";

import {generarId} from "./helpers/index.js";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [modal, setModal] = useState(false);
    const [animarModal, setAnimarModal] = useState(false);
    const [gastos, setGastos] = useState([]);
    const [gastoEditar, setGastoEditar] = useState({});

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setModal(true);
            setTimeout(() => {
                setAnimarModal(true);
            }, 500);
        }
    }, [gastoEditar]);

    const handleNuevoGasto = () => {
        setModal(true);
        setGastoEditar({});
        setTimeout(() => {
            setAnimarModal(true);
        }, 500);
    }

    const guardarGasto = (gasto) => {
        gasto.id = generarId();
        gasto.fecha = Date.now();
        setGastos([...gastos, gasto]);

        setAnimarModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    return (
        <div className={modal ? 'fijar' : ''}>
            <Header
                gastos={gastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />

            {isValidPresupuesto && (
                <>
                    <main>
                        <ListadoGastos
                            gastos={gastos}
                            setGastoEditar={setGastoEditar}
                        />
                    </main>
                    <div className="nuevo-gasto">
                        <img
                            src={IconoNuevoGasto}
                            alt=""
                            onClick={handleNuevoGasto}
                        />
                    </div>
                </>
            )}

            {modal &&
                <Modal
                    setModal={setModal}
                    animarModal={animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto={guardarGasto}
                    gastoEditar={gastoEditar}
                />
            }

        </div>
    )
}

export default App