import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase({});
  return (
    <div>
      <h1>Please Login</h1>

      <div>
        <button onClick={signInWithGoogle}>Google Sign In </button>
      </div>
      <br />
      <form>
        <input type="email" placeholder="Your Email" />
        <p></p>
        <br />

        <input type="password" placeholder="Your password" />
        <br />
        <p></p>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
