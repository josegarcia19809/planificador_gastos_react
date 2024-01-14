import {useState} from "react";
import Header from "./components/Header.jsx";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
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
                    />
                </div>
            )}

        </>
    )
}

export default App