import Encabezado from "../Components/Encabezado";
import Formulario from "../Components/Formulario";

//aqui llamamos a las partes que manejan tanto al encabezado (y sus componentes) como al cuerpo del formulario (y  sus componentes)
export function Principal() {
    return (
        <>
            <Encabezado />
            <Formulario />
        </>
    );
}
