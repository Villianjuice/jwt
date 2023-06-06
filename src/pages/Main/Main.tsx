import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
import Login from "./components/Login";
import Profile from "./components/Profile";

const Main = () => {
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
  return (
    <div>
      <h1>Main</h1>
      {isLoggedIn ? <Profile /> : <Login />}
    </div>
  );
};

export default Main;
