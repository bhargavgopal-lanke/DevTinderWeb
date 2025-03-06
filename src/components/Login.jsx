import React, { useState } from "react";

const Login = () => {

  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")

  const handleUsernameChange = (e) => {
    setEmailId(e?.target?.value)
  };
  const handlePwdChange = (e) => {
    setPassword(e?.target?.value);
  };

  return (
    <div>
      <div class="card">
        <div class="container">
          <h2>
            <b>Login</b>
          </h2>
          <div className="form-sec">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={emailId}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                value={password}
                onChange={handlePwdChange}
              />
            </div>
          </div>
        </div>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Login;
