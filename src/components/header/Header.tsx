import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootState } from "../../store";

const Header = () => {
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      {isLoggedIn ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : null}
    </ul>
  );
};

export default Header;
