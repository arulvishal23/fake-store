import { useState } from "react";
import "./Login.css";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = (e) => {
  e.preventDefault();



  if (
    username === "admin" &&
    password === "1234"
  ) {

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "role",
      "admin"
    );

    window.location.href = "/";
  }


  else if (
    username === "user" &&
    password === "1234"
  ) {

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "role",
      "user"
    );

    window.location.href = "/";
  }

  else {
    alert("Invalid Credentials");
  }
};
  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>
          Login to continue
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

        </form>

        

      </div>

    </div>
  );
}

export default Login;
