import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../store'
import { logoutUser } from '../../../store/auth/authCreators'


const Profile = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logoutUser());
    navigate('/')
  };

  return (
    <div>
      <p>You have successfully logged in</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Profile