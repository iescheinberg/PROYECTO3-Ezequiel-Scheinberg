
export function Metros_Cuadrados({ inputMetrosCuadrados, setInputMetrosCuadrados }) {
    return (
        <div>
            <label>Ingrese los m<sup>2</sup> que desee</label>
            <input
                type="number"
                id="metros_cuadrados"
                value={inputMetrosCuadrados}
                min="20"
                max="500"
                onChange={(e) => setInputMetrosCuadrados(e.target.value)}
                required />
        </div>
    );
}

export default Metros_Cuadrados;