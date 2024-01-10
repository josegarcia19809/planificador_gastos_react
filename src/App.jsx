import Header from "./components/Header.jsx";
import NuevoPresupuesto from "./components/NuevoPresupuesto.jsx";
import {useState} from "react";

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
        </>
    )
}

export default App