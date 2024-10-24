import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__link}>
        Blog
      </Link>
      <Link to="#" className={styles.header__link}>
        お問い合わせ
      </Link>
    </header>
  );
};

export default Header;
