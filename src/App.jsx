import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button} from "react-bootstrap";
import titulosimpsons from "./assets/titulo.png";
import Frase from "./Frase";
import './style.css'
import {useEffect, useState} from 'react';
import Spinner from "./Spinner";

function App() {

const[personaje, setPersonaje]=useState({});
const [mostrarSpinner, setMostrarSpinner]=useState(true);

  useEffect(()=>{
consultarAPI();
  },[])

const consultarAPI= async()=>{
  
  try{
    //mostrar el spinner
    setMostrarSpinner(true)
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta)
      const dato = await respuesta.json();
      console.log(dato [0]);
      setPersonaje(dato[0]);
      //mostrar frase
      setMostrarSpinner(false)

    }catch(error){
console.log(error);
//mostrar un mensaje al usuario  
    }
}

//condicion logica if, operador ternario
//(condicion logica)?(logica a ejecutar si cumplo la condicion):(logica a ejecutar si no se cumple la condicion)
  
const mostrarComponente = (mostrarSpinner=== true ? (  <Spinner></Spinner>):(<Frase personaje={personaje}></Frase>))

  return (
    <>
    <Container>
      <img src={titulosimpsons} className="img-fluid w-100 my-5"></img>
      <br></br>
      <div className="text-center mb-5">
      <Button variant="warning" onClick={consultarAPI} >Obtener frase</Button>{' '}
       </div>
{mostrarComponente}
    </Container>
    </>
  );
}

export default App;
