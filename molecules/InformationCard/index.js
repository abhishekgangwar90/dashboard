import { Container, Row, Col, Navbar } from 'react-bootstrap';

import styles from './informationCard.module.scss';


function InformationCard({title, subTitle, icon, info}){
  return <div className={styles.cardContainer}>
    <Row>
      <Col md="7">
        <Row>
          <Col className={styles.title}>{title}</Col>
        </Row>
        <Row>
          <Col className={styles.subTitle}>{subTitle}</Col>
        </Row>
      </Col>
      <Col className={styles.icon}>
        {icon}
      </Col>
    </Row>
    <Row>
      <Col md="9"> {info}</Col>
      <Col>icon</Col>
    </Row>
  </div>
}

export default InformationCard;