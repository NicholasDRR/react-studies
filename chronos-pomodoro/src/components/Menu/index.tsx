import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nexTheme = prevTheme === "dark" ? "light" : "dark";
      return nexTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <nav className={styles.menu}>
      <a
        href="#"
        aria-label="Ir para home"
        title="Ir para home"
        className={styles.menuLink}
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        aria-label="Ir para histórico"
        title="Ir para histórico"
        className={styles.menuLink}
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        aria-label="Ir para configurações"
        title="Ir para configurações"
        className={styles.menuLink}
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        aria-label="Mudar tema visual"
        title="Mudar tema visual"
        className={styles.menuLink}
        onClick={handleTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
