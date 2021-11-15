import styles from './dashboard.module.scss';
import Container from 'react-bootstrap/Container';
import DashboardHeader from './dashboardHeader';


export default function Dashboard(){
  return <main className={styles.container}>
    <DashboardHeader/>
    <div className={styles.grid}>
      <section className={styles.sectionSmall}>1</section>
      <section  className={styles.sectionSmall}>2</section>
      <section  className={styles.sectionSmall}>3</section>
      <section  className={styles.sectionSmall}>4</section>
      <section  className={styles.sectionLarge}>5</section>
      <section  className={styles.sectionChart}>6</section>
      <section className={styles.sectionChart}>7</section>
      <section className={styles.sectionSmall}>8</section>
     </div>
    </main>
}