import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../utils/userContext";
import { ReactComponent as Feed } from "../../assets/feed.svg";
import { ReactComponent as Adicionar } from "../../assets/adicionar.svg";
import { ReactComponent as Estatisticas } from "../../assets/estatisticas.svg";
import { ReactComponent as Sair } from "../../assets/sair.svg";
import styles from "./UserHeaderNav.module.css";

export default function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end activeClassName={styles.active}>
        <Feed />
        {mobile && "Feed"}
      </NavLink>
      <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
        <Estatisticas />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar" activeClassName={styles.active}>
        <Adicionar />
        {mobile && "Nova foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && "Sair"}
      </button>
    </nav>
  );
}
