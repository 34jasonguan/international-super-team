import Container from 'react-bootstrap/Container';
import './Grid.css'; // Import the CSS file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card.js';
import img1 from '../images/gift-card.jpg';
import img2 from '../images/parking.jpg';

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col><Card img={img1} title={"$5 Duke Store Gift Cards"} description={"Money"}></Card></Col>
        <Col><Card img={img1} title={"$10 Duke Store Gift Cards"} description={"description"}></Card></Col>
      </Row>
      <Row>
        <Col><Card img={img1} title={"$25 Duke Store Gift Cards"} description={"Money"}></Card></Col>
        <Col><Card img={img2} title={"2 hour parking voucher"} description={"description"}></Card></Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;