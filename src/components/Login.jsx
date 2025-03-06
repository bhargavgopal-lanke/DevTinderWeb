import React from "react";

const Login = () => {

  const handleUsernameChange = () => {};
  const handlePwdChange = () => {};

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
                value={""}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                value={""}
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
