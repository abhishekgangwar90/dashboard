import Link from 'next/link';
import Stack from 'react-bootstrap/Stack';
import { Row , Col} from 'react-bootstrap';
import { appConfig } from '../../config/app.config';

import styles from './sideNavigation.module.scss';


function NavLink({ name, href, icon}){
  return <Link href={href}>
      <a className={`${styles.navLink}`} >
        <span className={`u-margin-right-small`}>{icon}</span>
        <span className={styles.navText}>{name}</span>
      </a>
    </Link>
}

function SideNavigation(){
  return <Stack gap={4} className={`${styles.sideNav}`}>
    {appConfig.sideNavigation
      .filter(res => res.accessType === appConfig.accessType)
      .map((res) => {
        return <NavLink key={res.id} href={res.href} icon={res.icon} name={res.title} />
      })
    }
  </Stack>
}

export default SideNavigation;