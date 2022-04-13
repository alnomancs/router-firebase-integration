import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Please Register</h1>

      <form>
        <input type="text" placeholder="Your name" />
        <p></p>
        <br />

        <input type="email" placeholder="Your Email" />
        <p></p>
        <br />

        <input type="password" placeholder="Your password" />
        <br />
        <p></p>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
