import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import Home from "./containers/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserStorage } from "./utils/userContext";
import ProtectedRoute from "./components/Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
