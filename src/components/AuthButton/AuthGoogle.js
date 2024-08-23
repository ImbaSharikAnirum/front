import React from "react";
import { API } from "../../configs/constants";
import { Link } from "react-router-dom";
import GoogleIcon from "../../images/GoogleIcon";
import { Button } from "@mui/material";

export default function AuthGoogle() {
  return (
    <Link
      to={`${API}/connect/google`}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "16px",
      }}
    >
      <Button
        variant=""
        sx={{
          border: "0.005px solid #818181",
          borderRadius: "90px",
          fontSize: "10px",
          width: "100%",
          backgroundColor: "white",
          color: "black",
        }}
        startIcon={<GoogleIcon />}
      >
        Войти через Google
      </Button>
    </Link>
  );
}
