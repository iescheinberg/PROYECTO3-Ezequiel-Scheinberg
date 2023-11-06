import { useState, useEffect } from "react";
import Cotizador from "./Cotizador";
import Ubicaciones from "./Ubicaciones";
import Propiedades from "./Propiedades";
import Metros_Cuadrados from "./Metros_Cuadrados";

export function Formulario() {
    const [selectPropiedad, setSelectPropiedad] = useState("...");
    const [selectUbicacion, setSelectUbicacion] = useState("...");
    const [ubicacionData, setUbicacionData] = useState([]);
    const [propiedadData, setPropiedadData] = useState([]);
    const [inputMetrosCuadrados, setInputMetrosCuadrados] = useState(20);
    const [ValorPoliza, EstablecerValorPoliza] = useState("0.00");
    const costoMetroCuadrado = 35.86;

    useEffect(() => {
        fetch("/datos.json")
            .then((response) => response.json())
            .then((data) => {
                const ubicacion = data.filter((item) => item.categoria === "ubicacion");
                const propiedad = data.filter((item) => item.categoria === "propiedad");
                setUbicacionData(ubicacion);
                setPropiedadData(propiedad);
            });
    }, []);

    return (
        <div className="center div-cotizador">
            <h2 className="center separador">Complete los datos solicitados</h2>
            <Propiedades datos={propiedadData} Propiedad={setSelectPropiedad} />
            <Ubicaciones datos={ubicacionData} Ubicar={setSelectUbicacion} />
            <Metros_Cuadrados inputMetrosCuadrados={inputMetrosCuadrados} setInputMetrosCuadrados={setInputMetrosCuadrados} />
            <Cotizador
                Propiedad={propiedadData}
                selectPropiedad={selectPropiedad}
                ubicacionData={ubicacionData}
                selectUbicacion={selectUbicacion}
                inputMetrosCuadrados={inputMetrosCuadrados}
                costoMetroCuadrado={costoMetroCuadrado}
                ValorPoliza={ValorPoliza}
                EstablecerValorPoliza={EstablecerValorPoliza} />
        </div>
    );
}

export default Formulario;