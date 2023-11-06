import { Link } from "react-router-dom";

export function Encabezado() {//Componente header de la pág.
    return (
        <nav>
            <div className="historial">
                <Link to="historial">
                    <button>Ver Historial</button>
                </Link>
            </div>
            <h1 className="center separador">Seguros del hogar 🏡</h1>
        </nav>
    );
}

export default Encabezado;