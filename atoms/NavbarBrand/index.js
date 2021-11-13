import { Container, Row, Col, Navbar } from 'react-bootstrap';

import { appConfig } from '../../config/app.config'
import styles from './NavbarBrand.module.scss';

function NavBarBrandComponent(){
  return <Container>
    <Row><Col className={styles.title}>{appConfig.appTitle}</Col></Row>
    <Row><Col className={styles.subtitle}>{appConfig.appSubTitle}</Col></Row>
  </Container>
}

export default NavBarBrandComponent;