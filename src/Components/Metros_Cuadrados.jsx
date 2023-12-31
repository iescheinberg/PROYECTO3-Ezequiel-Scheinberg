export function Metros_Cuadrados({ inputMetrosCuadrados, setInputMetrosCuadrados }) {// Ingresamos los metros cuadrados
    return (
        <div>
            <label htmlFor="metros_cuadrados">Ingresa los m<sup>2</sup>:</label>
            <input
                type="number"
                id="metros_cuadrados"
                value={inputMetrosCuadrados}
                min="20"
                max="500"
                onChange={(e) => setInputMetrosCuadrados(e.target.value)}
                required
            />
        </div>
    );
}

export default Metros_Cuadrados;