
function Teclas({ escribirLetra }){

    const teclas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const botones = generarTeclas();   

    function generarTeclas(){
        return(
            teclas.map(letra => (        
                <button key={letra} className="botonTecla" onClick={() => escribirLetra(letra)}>
                    {letra}
                </button>
            ))
        )
    }

    return(
        <div className="contenedorTeclas">
            {botones}
        </div>
    )
}

export default Teclas;