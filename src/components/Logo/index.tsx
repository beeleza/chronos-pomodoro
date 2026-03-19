import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='/'>
        <div className={styles.logoIcon}>
          <TimerIcon />
          <div className={styles.logoGlow}></div>
        </div>
        <span className={styles.logoText}>Chronos</span>
      </a>
    </div>
  );
}