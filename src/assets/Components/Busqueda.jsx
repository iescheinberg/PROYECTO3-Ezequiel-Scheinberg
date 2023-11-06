import { useEffect, useState } from "react";


export function Busqueda() {
    const [cotizaciones, Establecer_cotizaciones] = useState([]);

    useEffect(() => {
        const cotizacionesGuardadas =
            JSON.parse(localStorage.getItem("cotizacion")) || [];
        Establecer_cotizaciones(cotizacionesGuardadas);
    }, []);

    const Eliminar_Cotizacion = (index) => {
        const nuevasCotizaciones = [...cotizaciones];
        nuevasCotizaciones.splice(index, 1);
        Establecer_cotizaciones(nuevasCotizaciones);
        localStorage.setItem("cotizaciones", JSON.stringify(nuevasCotizaciones));
    };

    const Vaciar_Historial = () => {
        Establecer_cotizaciones([]);
        localStorage.removeItem("cotizacion");
    };

    return (
        <div>
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className="center div-cotizador">
                <table>
                    <thead>
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cotizaciones.map(
                            ({ fecha, propiedad, ubicacion, metros_cuadrados, poliza }, index) => (
                                <tr key={index}>
                                    <td>{fecha}</td>
                                    <td>{propiedad}</td>
                                    <td>{ubicacion}</td>
                                    <td>{metros_cuadrados}</td>
                                    <td>{poliza}</td>
                                    <td>
                                        <span className="eliminaritem" onClick={() => Eliminar_Cotizacion({ index })}>
                                            <button>
                                                <p>Borrar</p>
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            )
                        )};
                    </tbody>
                </table>
                <div className="center separador">
                    <button className="button button-outline" id="botoneshistorial" onClick={Vaciar_Historial}>
                        <p>Vaciar</p>
                    </button>
                    <span style={{ margin: "0 10px" }} />
                    <button className="button button-outline" id="botoneshistorial" onClick={() => window.history.back()}>
                        <p>Volver</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Busqueda