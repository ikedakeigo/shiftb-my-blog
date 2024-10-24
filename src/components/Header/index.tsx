import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.header__link}>
        Blog
      </a>
      <a href="#" className={styles.header__link}>
        お問い合わせ
      </a>
    </header>
  );
};

export default Header;
