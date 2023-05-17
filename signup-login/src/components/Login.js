import { useState } from "react";
import { projectAuth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(projectAuth, loginEmail, loginPass);
    } catch (err) {
      setError(err);
      {
        /*
        console.log(err.message);*/
      }
      console.log("unsuccessful login");
    }

    setLoginEmail("");
    setLoginPass("");
  };

  return (
    <form onSubmit={(e) => handleLoginSubmit(e)}>
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
