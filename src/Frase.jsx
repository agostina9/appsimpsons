import Card from "react-bootstrap/Card";
import homero from "./assets/homero.png";

const Frase = ({personaje}) => {
  return (
      <Card style={{ width: "100%" }} >
        <div className='d-flex'>
      <Card.Img variant="top" src={personaje.image} />
      <Card.Body>
        <Card.Title>{personaje.character}</Card.Title>
        <Card.Text>
        {personaje.quote}</Card.Text>
      </Card.Body>

        </div>
    </Card>
  );
};

export default Frase;
