import Header from "./components/Header.jsx";
import NuevoPresupuesto from "./components/NuevoPresupuesto.jsx";
import {useState} from "react";

function App() {
    const [presupuesto, setPresupuesto] = useState(0);
    return (
        <>
            <Header
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </>
    )
}

export default App