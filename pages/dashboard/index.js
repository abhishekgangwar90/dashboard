import styles from './dashboard.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Dashboard(){
  return <Container fluid>
      <Row>
    <Col>1 of 1</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
  <Button variant="primary">Primary</Button>
     </Container>
}