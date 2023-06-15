import React from "react";
import { useNavigate } from "react-router-dom";
function LoginBtn() {
  const navigate = useNavigate();
  const nav_login = (e) => {
    e.preventDefault();
    navigate("/login", { replace: true });
  };

  return (
    <div className="Login_Btn">
      <button type="button" className="btn btn-primary" onClick={nav_login}>
        Login
      </button>
    </div>
  );
}

export default LoginBtn;
