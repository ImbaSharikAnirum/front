import React from "react";
import "../styles/buttons.css";
import "../styles/header.css";
import { ReactComponent as Logo } from "../images/AnirumLogo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Logo style={{ height: "25px", width: "auto" }} />

      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <button className="button_white button-animate-filter">
          {" "}
          <div className="h5">Курсы</div>
        </button>
      </Link>
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        <button className="button Body-3 button-animate-filter">Вход</button>
        <button className="button_secondary Body-3 button-animate-filter">
          Регистрация
        </button>
      </div>
    </div>
  );
}

export default Header;
