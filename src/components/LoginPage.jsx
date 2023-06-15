import React from "react";

function LoginPage() {
  return (
    <div className="login">
      <div className="input-group-mb3">
        <input type="text" className="form-control" placeholder="username" />
      </div>
      <div className="input-group-mb3">
        <input type="text" className="form-control" placeholder="email" />
      </div>
      <div className="input-group-mb3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
        />
      </div>
    </div>
  );
}

export default LoginPage;
