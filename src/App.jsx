import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import titulosimpsons from "./assets/titulo.png";
import Frase from "./Frase";
import './style.css'

function App() {
  return (
    <>
    <Container className='bg'>
      <img src={titulosimpsons} className="img-fluid w-100 my-5"></img>
      <br></br>
      <div className="text-center mb-5">
      <Button variant="warning" >Obtener frase</Button>{' '}

      </div>
    <Frase></Frase>
    </Container>
    </>
  );
}

export default App;
