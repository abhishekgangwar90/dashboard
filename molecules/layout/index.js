import { Container, Row, Col, Navbar } from 'react-bootstrap';

import NavBar from '../NavBar';
import SideNavigation from './../SideNavigation';

import styles from './layout.module.scss';

/**
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function Layout({ children }){
 return <div className={styles.layout}>
    {/* App Header starts from here */}
    <NavBar/>
    {/* Content starts from here */}
    <Container fluid className={`${styles.content}`}>
        <Row className="u-height-100">
          <Col lg="1" className={`u-padding-small ${styles.navigation}`}>
              <SideNavigation/>
          </Col>
          <Col> {children} </Col>
        </Row>
    </Container>
   </div>
}