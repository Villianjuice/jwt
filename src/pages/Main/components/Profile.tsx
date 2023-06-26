import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store";
import { getProfile, logoutUser } from "../../../store/auth/authCreators";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const profile = useAppSelector((state) => state.auth.profileData.profile);

  const onLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div>
      <h1>{profile}</h1>
      <p>You have successfully logged in</p>
      <button onClick={onLogout}>Log out</button>
      <button onClick={() => dispatch(getProfile())}>Update profile</button>
    </div>
  );
};

export default Profile;
