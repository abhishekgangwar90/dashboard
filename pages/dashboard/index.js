import styles from './dashboard.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Dashboard(){
  return <main className={styles.grid}>
      <section className={styles.sectionSmall}>1</section>
      <section  className={styles.sectionSmall}>2</section>
      <section  className={styles.sectionSmall}>3</section>
      <section  className={styles.sectionSmall}>4</section>
      <section  className={styles.sectionLarge}>5</section>
      <section  className={styles.sectionChart}>6</section>
      <section className={styles.sectionChart}>7</section>
      <section className={styles.sectionSmall}>8</section>
     </main>
}