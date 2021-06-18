import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/dogs.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Logo />
        </Link>
        <Link to="/login" className={styles.login}>
          Login
        </Link>
      </nav>
    </header>
  );
}
