import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/dogs.svg";
import { UserContext } from "../../utils/userContext";

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Logo />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.username}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
