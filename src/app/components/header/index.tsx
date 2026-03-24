import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>
          <Link href="/">Listinha</Link>
        </h1>
        <nav className={styles.header__nav}>
          <Link href="/"> Home </Link>
          <Link href="/pagina/alarmes"> Alarmes </Link>
          <Link href="/pagina/lembretes"> Lembretes </Link>
          <Link href="/pagina/calendario"> Calendário </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
