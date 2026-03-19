// Menu/index.tsx
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme = localStorage.getItem("theme") as AvailableThemes | null;
    return storedTheme ?? "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  };

  return (
    <nav className={styles.menu}>
      <a
        className={`${styles.menuLink} ${styles.active}`}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <div className={styles.linkContent}>
          <HouseIcon />
          <span className={styles.linkTooltip}>Home</span>
        </div>
        <div className={styles.linkGlow}></div>
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <div className={styles.linkContent}>
          <HistoryIcon />
          <span className={styles.linkTooltip}>Histórico</span>
        </div>
        <div className={styles.linkGlow}></div>
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <div className={styles.linkContent}>
          <SettingsIcon />
          <span className={styles.linkTooltip}>Configurações</span>
        </div>
        <div className={styles.linkGlow}></div>
      </a>

      <a
        className={`${styles.menuLink} ${styles.themeToggle}`}
        href="#"
        aria-label="Mudar tema"
        title={`Mudar para tema ${theme === "dark" ? "claro" : "escuro"}`}
        onClick={handleThemeChange}
      >
        <div className={styles.linkContent}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          <span className={styles.linkTooltip}>
            {theme === "dark" ? "Tema claro" : "Tema escuro"}
          </span>
        </div>
        <div className={styles.linkGlow}></div>
      </a>
    </nav>
  );
}