export function Ubicaciones({ datos, Ubicar }) {// Seleccionamos ubicación deseada
    const handleChange = (e) => {
        Ubicar(e.target.value);
    };
    return (
        <div>
            <label htmlFor="ubicacion">Seleccione la ubicación</label>
            <select id="ubicacion" onChange={handleChange}>
                <option selected disabled>
                    ...
                </option>
                {datos.map((item, index) => (
                    <option key={index} value={item.tipo}>
                        {item.tipo}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Ubicaciones;
