import Card from "react-bootstrap/Card";
import homero from "./assets/homero.png";

const Frase = () => {
  return (
      <Card style={{ width: "100%" }} >
        <div className='d-flex'>
      <Card.Img variant="top" src={homero} />
      <Card.Body>
        <Card.Title>Homer Simpson</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iure.
        </Card.Text>
      </Card.Body>

        </div>
    </Card>
  );
};

export default Frase;
