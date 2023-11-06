export function Propiedades({ datos, Propiedad }) {// Seleccionamos el tipo de propiedad
    const handleChange = (e) => {
        Propiedad(e.target.value);
    };

    return (
        <div>
            <label htmlFor="propiedad">Seleccione tipo de propiedad</label>
            <select id="propiedad" onChange={handleChange}>
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

export default Propiedades;