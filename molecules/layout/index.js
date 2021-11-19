import { Container, Row, Col, Navbar } from 'react-bootstrap';

import NavBar from '../NavBar';
import SideNavigation from './../SideNavigation';
import { appConfig } from '../../config/app.config';
import styles from './layout.module.scss';

/**
 * @export
 * @param {*} { children }
 * @return {*} 
 */
export default function Layout({ children }){

  const compactLayout = appConfig.isLayoutCompact;

 return <div className={styles.layout}>
    {/* App Header starts from here */}
    <NavBar/>
    
    {/* Content starts from here */}
    <div className={styles.container}>
        <nav className={styles.nav}>
          <SideNavigation isCompactLayout={compactLayout}/>
        </nav>
        <main className={styles.content}>
          {children}
        </main>
    </div>
   </div>
}