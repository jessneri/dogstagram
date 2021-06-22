import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LoginNewPassword from "./LoginNewPassword";
import LoginResetPassword from "./LoginResetPassword";
import { UserContext } from "../../utils/userContext";
import style from "./Login.module.css";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="novasenha" element={<LoginNewPassword />} />
          <Route path="resetar" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
}
