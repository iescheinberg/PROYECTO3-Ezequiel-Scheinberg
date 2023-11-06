import { Link } from "react-router-dom";

export function Encabezado() {
    return (
        <nav>
            <div className="historial">
                <Link to="historial">
                    <button>Ver historial</button>
                </Link>
            </div>
            <h1 className="center separador">Seguros para el hogar🏡</h1>
        </nav>
    );
}

export default Encabezado;