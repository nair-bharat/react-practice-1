import { useState } from "react";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  return (
    <form>
      <input
        type="email"
        placeholder="enter email"
        value={loginEmail}
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="enter password"
        value={loginPass}
        onChange={(event) => {
          setLoginPass(event.target.value);
        }}
        required
      />
      {console.log(loginEmail, loginPass)}
      <button>Login</button>
    </form>
  );
};

export default Login;
