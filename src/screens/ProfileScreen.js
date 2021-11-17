import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout, selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut=()=>{
    dispatch(
      logout()
    )
  }

  return (
    <div className="profilescreen">
      <Nav />
      
      <div className="profilescreen__body">
        <h1>Edit Profile</h1>
        <div className="profilescreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profilescreen__details">
            <h2>{user.email}</h2>
            <div className="profilescreen__plans">
              <h3>Plans (Current Plan: {user.subs.plan})</h3>
              <h4>Renewal date: {user.subs.expires}</h4>
              <button
                className="profilescreen__signout">
                Subscribe
              </button>
              <button
                className="profilescreen__signout"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
