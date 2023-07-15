import React from "react";
import './ProfilePic.css';

function ProfilePic() {
    return(
        <div className="profile-photo">
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                PROFILE IMAGE
            </h1>
            <img src="" alt="" className="rectangle-33" />
            <div className="change-pfp">
                <i className="icon-search"></i>
                <div className="change-profile-pic valign-text-middle">
                    Change Profile Photo
                </div>
            </div>
        </div>
    );
}
export default ProfilePic;

/* <div className="profilePhotoSection">
            <h2 className="profileHeading">
                PROFILE IMAGE
            </h2>
            <div className="profileImage">
            </div>
            <div className="changePFP">
                <i className="userIcon"></i>
                <h3 className="changePFPText">Change Profile Photo</h3>
            </div>
        </div> */