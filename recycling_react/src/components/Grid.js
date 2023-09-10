import Container from 'react-bootstrap/Container';
import './Grid.css'; // Import the CSS file
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card.js';

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        {/* <Col><Card img={} title={"this is the title"} description={"description"}></Card></Col>
        <Col><Card img={} title={"Second prize"} description={"description"}></Card></Col> */}
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;