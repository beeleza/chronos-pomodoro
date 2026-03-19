// CountDown/index.tsx
import styles from './styles.module.css';

export function CountDown() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.digit}>00</span>
        <span className={styles.separator}>:</span>
        <span className={styles.digit}>00</span>
      </div>
      <div className={styles.status}>
        <span className={styles.statusDot}></span>
        Foco
      </div>
    </div>
  );
}