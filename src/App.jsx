import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import titulosimpsons from "./assets/titulo.png";
import Frase from "./Frase";
import './style.css'
import {useEffect, useState} from 'react';

function App() {

const[personaje, setPersonaje]=useState({});

  useEffect(()=>{
consultarAPI();
  },[])

const consultarAPI= async()=>{
  
  try{
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta)
      const dato = await respuesta.json();
      console.log(dato [0]);
      setPersonaje(dato[0]);

    }catch(error){
console.log(error);
//mostrar un mensaje al usuario  
    }
}

  return (
    <>
    <Container>
      <img src={titulosimpsons} className="img-fluid w-100 my-5"></img>
      <br></br>
      <div className="text-center mb-5">
      <Button variant="warning" onClick={consultarAPI} >Obtener frase</Button>{' '}

      </div>
    <Frase personaje={personaje}></Frase>
    </Container>
    </>
  );
}

export default App;
