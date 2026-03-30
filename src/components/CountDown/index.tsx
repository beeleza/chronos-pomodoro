import { useTaskContext } from '../../contexts/TaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.digit}>{state.formattedSecondsRemaining.split(':')[0]}</span>
        <span className={styles.separator}>:</span>
        <span className={styles.digit}>{state.formattedSecondsRemaining.split(':')[1]}</span>
      </div>
      <div className={styles.status}>
        <span className={styles.statusDot}></span>
        Foco
      </div>
    </div>
  );
}