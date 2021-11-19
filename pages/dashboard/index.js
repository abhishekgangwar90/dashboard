import styles from './dashboard.module.scss';
import Container from 'react-bootstrap/Container';
import DashboardHeader from './dashboardHeader';

import {appConfig} from '../../config/app.config';

export default function Dashboard(){
  return <main className={styles.container}>
    <DashboardHeader/>
    <section className={styles.grid}>
      
     </section>
    </main>
}