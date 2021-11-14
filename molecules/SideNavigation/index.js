import Stack from 'react-bootstrap/Stack';
import { Row , Col} from 'react-bootstrap';
import { appConfig } from '../../config/app.config';

import styles from './sideNavigation.module.scss';


function NavLink({ name, icon}){
  return <div className={styles.navLink}>
      <span className="u-margin-right-small">{icon}</span>
      <span>{name}</span>
    </div>
}

function SideNavigation(){
  return <Stack gap={4} className={`u-padding-small ${styles.sideNav}`}>
    {appConfig.sideNavigation
      .filter(res => res.accessType === appConfig.accessType)
      .map((res) => {
        return <NavLink key={res.id} icon={res.icon} name={res.title} />
      })
    }
  </Stack>
}

export default SideNavigation;