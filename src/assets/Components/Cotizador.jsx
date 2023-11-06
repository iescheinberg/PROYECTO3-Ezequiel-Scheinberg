import Swal from "sweetalert2";
import Toastify from "toastify-js";
import { useState } from "react";

export function Cotizador({
    propiedadData,
    selectPropiedad,
    ubicacionData,
    selectUbicacion,
    inputMetrosCuadrados,
    costoMetroCuadrado,
    ValorPoliza,
    EstablecerValorPoliza,
}) {
    const [cotizado, Cotizado_Establecido] = useState(false);

    const cotizar = () => {
        if (
            inputMetrosCuadrados >= 20 &&
            inputMetrosCuadrados <= 500 &&
            selectPropiedad !== "..." &&
            selectUbicacion !== "..."
        ) {
            const factorPropiedad = propiedadData.find(
                (item) => item.tipo === selectPropiedad
            ).factor;
            const factorUbicacion = ubicacionData.find(
                (item) => item.tipo === selectUbicacion
            ).factor;
            const resultado = factorPropiedad * factorUbicacion * inputMetrosCuadrados * costoMetroCuadrado;
            const ValorPoliza = resultado.toFixed(2);
            EstablecerValorPoliza(ValorPoliza);
            Cotizado_Establecido(true);

            Swal.fire({
                icon: "success",
                title: "Cotización realizada con éxito.",
                showConfirmButton: false,
                timer: 3500,
                width: "200px",
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Debes completar todos los datos en pantalla.",
                showConfirmButton: false,
                timer: 3500,
                width: "200px",
            });
        }
        if (inputMetrosCuadrados < 20 || inputMetrosCuadrados > 500) {
            Swal.fire({
                icon: "warning",
                title: "La cantidad de metros debe estar entre los 20 y los 500.",
                showConfirmButton: false,
                timer: 3500,
                width: "200px",
            });
        }
    };

    const guardar = () => {
        if (cotizado) {
            const agregarCotizacion = {
                fecha:
                    new Date().toLocaleDateString() +
                    " " +
                    new Date().toLocaleDateString(),
                propiedad: selectPropiedad,
                ubicacion: selectUbicacion,
                metros_cuadrados: inputMetrosCuadrados,
                poliza: ValorPoliza,
            };
            const cotizaciones = JSON.parse(localStorage.getItem("cotizacion")) || [];
            cotizaciones.push(agregarCotizacion);
            localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));

            Toastify({
                text: "Cotización guardada.",
                duration: 3500,
                newWindow: true,
                gravity: "top",
                position: "left",
                style: {
                    background: "CornflowerBlue",
                },
            }).showToast();
        }
    };

    return (
        <>
            <div className="center separador">
                <button onClick={cotizar}>Cotizar</button>
            </div>
            <div className="center separador">
                <p className="importe">
                    Precio estimado: $ <span id="valorPoliza">{ValorPoliza}</span>
                    <span className={`guardar ${cotizado ? "" : "ocultar"}`} onClick={guardar} title="Guardar en historial">
                        💾
                    </span>
                </p>
            </div>
        </>
    );
}