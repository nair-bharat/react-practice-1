import { useState } from "react";
import { projectAuth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const [signupEmail, setSignupEmail] = useState("");
  const [sigupPass, setSignupPass] = useState("");
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(projectAuth, signupEmail, sigupPass);
    } catch (err) {
      setError(err);
      {
        /*
        console.log(err.message);*/
      }
    }

    setSignupEmail("");
    setSignupPass("");
  };

  return (
    <form onSubmit={(e) => handleSignupSubmit(e)}>
      <input
        type="email"
        value={signupEmail}
        placeholder="enter your email"
        onChange={(event) => {
          setSignupEmail(event.target.value);
        }}
        required
      />
      {/*console.log(signupEmail, sigupPass)*/}

      <input
        type="password"
        value={sigupPass}
        placeholder="enter your password"
        onChange={(event) => {
          setSignupPass(event.target.value);
        }}
        required
      />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
