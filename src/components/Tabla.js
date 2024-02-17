
function Tabla({ numMaxIntentos, intentos, resultado, generarNuevoJuego, listaPalabras, palabra }){

    function setColor(letra, e){
        const arrayPalabra = palabra.split('');

        if(letra.toLowerCase() === arrayPalabra[e]){
            return {backgroundColor: 'green'};
        }else{
            if(arrayPalabra.includes(letra.toLowerCase())){
                return {backgroundColor: 'orange'};
            }else{
                return {backgroundColor: 'red'};
            }
        }

    }

    const tabla = generarTabla();

    function generarTabla(){
        return(
            listaPalabras.map((palabra, a) => (
                <ul key={a} className="contenedorTabla-ul">
                    {
                        palabra.map((letra, e) => (
                            letra !== ''
                                //? <li key={e} style={letra.toLowerCase() === arrayPalabra[e] ? styleTrue : styleFalse} className="contenedorTabla-li">{letra}</li>
                                ? <li key={e} style={setColor(letra, e)} className="contenedorTabla-li">{letra}</li>
                                : <li key={e} className="contenedorTabla-li">?</li>
                        ))
                    }
                </ul>
            ))
        )
    }
    
    return (
        <div className="contenedorTabla">
            <h2>Intentos restantes: {numMaxIntentos - intentos}</h2>
            {
                intentos === 5 && resultado === false
                    ?
                        <div>
                            <p style={{color: 'red'}} >Has perdido!. Te has quedado sin intentos.</p>
                            <button onClick={generarNuevoJuego}>Reintentar</button>
                        </div>
                    : null
            }
            {
                resultado === true
                    ? 
                        <div>
                            <p style={{color: 'green'}} >Enhorabuena!. Has acertado la palabra.</p>
                            <button onClick={generarNuevoJuego}>Volver a jugar</button>
                        </div>
                    : null
            }
            {tabla}
        </div>
    )
}

export default Tabla;