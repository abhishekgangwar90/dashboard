import Stack from 'react-bootstrap/Stack';
import { Row , Col} from 'react-bootstrap';
import { appConfig } from '../../config/app.config';



function NavLink({ name, icon}){
  return <Row>
      <Col md="1" className="u-margin-right-small">{icon}</Col>
      <Col>{name}</Col>
    </Row>
}

function SideNavigation(){
  return <Stack gap={4} className="u-padding-small">
    {appConfig.sideNavigation
      .filter(res => res.accessType === appConfig.accessType)
      .map((res) => {
        return <NavLink key={res.id} icon={res.icon} name={res.title} />
      })
    }
  </Stack>
}

export default SideNavigation;