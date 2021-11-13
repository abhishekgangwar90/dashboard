import {Container, Row, Col, Navbar} from 'react-bootstrap';

import styles from './layout.module.scss';


function NavBarBrandComponent(){
  return <Container>
    <Row className={styles.title}>Dashboard</Row>
    <Row className={styles.subtitle}>Simplifying your data</Row>
  </Container>
}

export default function Layout({ children }){
 return <Navbar bg="light">
     <Container fluid>
      <Navbar.Brand>
        <NavBarBrandComponent/>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        Icons
      </Navbar.Collapse>
     </Container>
   </Navbar>
}