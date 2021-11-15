import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RefreshIcon from '@mui/icons-material/Refresh';

import styles from './dashboard.module.scss';

function DashboardHeader(){
  return <Row className={styles.dashboardHeader}>
        <Col>
          <h4>Dashboard</h4>
        </Col>
        <Col className={styles.dashboardHeaderActions}>
          <Button size="sm"><RefreshIcon/> Refresh</Button>
          <Button size="sm" className="u-margin-left-small"><FilterAltIcon/> Filters</Button>
        </Col>
    </Row>
}

export default DashboardHeader;