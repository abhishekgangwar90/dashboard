import { Container, Row, Col, Navbar } from 'react-bootstrap';

import NavBarBrand from '../../atoms/NavbarBrand';
import NavBarActions from '../../atoms/NavbarBrand';

import styles from './layout.module.scss';

export default function Layout({ children }){
 return <>
    <Navbar bg="light">
      <Container fluid>
        <Navbar.Brand>
          <NavBarBrand/>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          Icons
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid className="u-margin-small">
      <Row>
        <Col md="2" className={`u-padding-small ${styles.navigation}`}>

        </Col>
        <Col> {children} </Col>
      </Row>
    </Container>
   
   </>
}