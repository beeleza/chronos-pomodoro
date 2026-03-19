// Footer/index.tsx
import { Heart } from 'lucide-react';
import styles from './styles.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Linha fina decorativa */}
        <div className={styles.line}></div>
        
        {/* Apenas o essencial */}
        <div className={styles.content}>
          <a 
            href="https://pt.wikipedia.org/wiki/Técnica_pomodoro" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Sobre a técnica Pomodoro
          </a>
          
          <span className={styles.separator}>•</span>
          
          <p className={styles.copyright}>
            <span>Chronos © {currentYear}</span>
            <span className={styles.heart}>
              <Heart size={12} className={styles.heartIcon} />
            </span>
            <span>
              <a href="https://github.com/beeleza" target='_blank'>Higor Beleza</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}