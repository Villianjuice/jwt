import React, { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../store";
import { loginUser } from "../../../store/auth/authCreators";

const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login, password }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login">Login:</label>
          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            name="login"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
