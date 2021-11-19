import { Container, Navbar } from 'react-bootstrap';

import NavBarBrand from '../../atoms/NavbarBrand';
import NavBarActions from '../../atoms/NavbarAction';
import styles from './navbar.module.scss';

/**
 * Renders Application header which sticks on top
 * @return {*} 
 */
function NavBar(){
  return <Navbar className={styles.nav}>
      <Container fluid className="u-padding-left-medium u-padding-right-medium">
        <Navbar.Brand>
          <NavBarBrand/>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavBarActions/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}

export default NavBar;