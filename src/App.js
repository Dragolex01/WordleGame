import './style.css';
import { useEffect, useState } from 'react';
import Tabla from './components/Tabla';
import Teclas from './components/Teclas';

function App() {

  const wordsList = ['panel', 'gatos', 'perro', 'libre', 'salto', 'verde'];
  //const arrayVacio = ['', '', '', '', ''];
  //const [listaPalabras, setListaPalabras] = useState([]);
  const arrayVacio = [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']];
  const [listaPalabras, setListaPalabras] = useState(arrayVacio);
  const [palabra, setPalabra] = useState("");
  const [numLetrasIntroducidas, setNumLetrasIntroducidas] = useState(0);
  const [intentos, setIntentos] = useState(0);
  const numMaxIntentos = 5;
  var resultado = false;

  useEffect(() => {
    generarNuevoJuego();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function generarNuevoJuego(){
    setPalabra(wordsList[Math.floor(Math.random()*wordsList.length)]);
    // rellenarArray();

    if(listaPalabras !== arrayVacio){
      setListaPalabras(arrayVacio);
      setNumLetrasIntroducidas(0);
      setIntentos(0);
    }
  }

  // function rellenarArray(){
  //   var newLista = [];

  //   for(let i = 0; i < numMaxIntentos; i++){
  //     newLista.push(arrayVacio)  ;
  //   }

  //   console.log(newLista);

  //   setListaPalabras(newLista);
  // }

  if(numLetrasIntroducidas === 5){
    if(comprobarPalabra() === false){
      setIntentos(intentos + 1);
      setNumLetrasIntroducidas(0);
    }else{
      resultado = true;
    }
  }

  function comprobarPalabra(){
    return listaPalabras[intentos].join('').toLowerCase() === palabra;
  }

  function escribirLetra(letra){
    listaPalabras[intentos][listaPalabras[intentos].indexOf('')] = letra;
    
    setListaPalabras(listaPalabras);
    setNumLetrasIntroducidas(numLetrasIntroducidas + 1);
  }

  return (
    <div className="App">
      <h1 className="titulo">Wordle Game</h1>
      <h2>{palabra}</h2>
        <div className="contenedores">  
          <Tabla numMaxIntentos={numMaxIntentos} intentos={intentos} resultado={resultado} generarNuevoJuego={generarNuevoJuego} listaPalabras={listaPalabras} palabra={palabra} />
          <Teclas escribirLetra={escribirLetra} />
        </div>
    </div>
  );
}

export default App;