import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";
import Nav from "../components/Nav";
import { auth } from "../firebase";
import "./css/Profile.css";
function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_detils">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <div className="profileScreen_plan">
                <div className="profileScreen_ifo">
                  <h5>Mobile</h5>
                  <h6>480p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_ifo">
                  <h5>Basic</h5>
                  <h6>720p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_ifo">
                  <h5>Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen_plan">
                <div className="profileScreen_ifo">
                  <h5>Premium</h5>
                  <h6>4k+HDR</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
