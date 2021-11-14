import { Container, Row, Col, Navbar } from 'react-bootstrap';

import { appConfig } from '../../config/app.config'
import styles from './NavBarActions.module.scss';

function NavBarActions(){
  return <Row>
    <Col md="auto">
      Jan 7, 2020
    </Col>
    <Col>
      <Row>
        {appConfig.navigation
          .filter(res => res.accessType === appConfig.accessType)
          .map((res) => {
            return <Col md={res.id === 1 && '4'} key={res.id}>{res.content}</Col>
          })
        }
      </Row>
    </Col>
  </Row>
}

export default NavBarActions;