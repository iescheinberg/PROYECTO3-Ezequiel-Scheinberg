import { useEffect, useState } from "react";
export function Busqueda() {//funcion que maneja el historial
    const [cotizaciones, Establecer_cotizaciones] = useState([]);

    useEffect(() => {//Recuperamos datos de cotización
        const cotizacionesGuardadas =
            JSON.parse(localStorage.getItem("cotizacion")) || [];
        Establecer_cotizaciones(cotizacionesGuardadas);
    }, []);

    const Eliminar_Cotizacion = (index) => {//Eliminamos cotizacón seleccionada)
        const nuevasCotizaciones = [...cotizaciones];
        nuevasCotizaciones.splice(index, 1);
        Establecer_cotizaciones(nuevasCotizaciones);
        localStorage.setItem("cotizacion", JSON.stringify(nuevasCotizaciones));
    };

    const Vaciar_Historial = () => {//Limpiamos el historial de cotizaciones
        Establecer_cotizaciones([]);
        localStorage.removeItem("cotizacion");
    };

    return (
        <div>
            <h1 className="center separador">Ver Historial 📋</h1>
            <div className=" center div-cotizador">
                <table>
                    <thead>
                        {/* Tabla con las cotizaciones guardadas previamente */}
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
                        {/* Se muestran los resultados de busqueda */}
                        {cotizaciones.map(
                            ({ fecha, propiedad, ubicacion, metros_cuadrados, poliza }, index) => (
                                <tr key={index}>
                                    <td>{fecha}</td>
                                    <td>{propiedad}</td>
                                    <td>{ubicacion}</td>
                                    <td>{metros_cuadrados}</td>
                                    <td>{poliza}</td>
                                    <td>
                                        {/* Eliminar una cotizacion a elección */}
                                        <span
                                            className="eliminaritem"
                                            onClick={() => Eliminar_Cotizacion(index)}>
                                            <button>
                                                <p>Borrar</p>
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <div className="center separador">
                    {/* Borra historial de cotización */}
                    <button
                        onClick={Vaciar_Historial}
                        className="button button-outline"
                        id="botoneshistorial">
                        <p>Vaciar</p>
                    </button>
                    <span style={{ margin: "0 10px" }} />
                    {/* Volver a pantalla de acciones de cotización */}
                    <button
                        onClick={() => window.history.back()}
                        className="button button-outline"
                        id="botoneshistorial">
                        <p>Volver</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Busqueda;