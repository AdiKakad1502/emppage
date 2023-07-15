import React from "react";
import './UserCard.css';

function UserCard() {
    return (
        <div className="userBox">
            <div className="namePhoto">
                <img  className="pfpImg"src="" alt="" />
                <h1 className="title valign-text-middle nunito-normal-black-26px">
                    USERNAME
                </h1>
                <div className="joiningDate valign-text-middle">
                    Since Joining Date
                </div>
            </div>
            <div className="statusBox">
                <div className="currentStatus valign-text-middle nunito-bold-black-20px">
                    Current Status
                </div>
                <div className="statusSign">
                    <div className="statusTxt valign-text-middle nunito-normal-black-20px">
                        ACTIVE
                    </div>
                </div>
            </div>
            <div className="userBioBox">
                <div className="bioHead valign-text-middle nunito-bold-black-20px">
                    User's description :
                </div>
                <p className="userBio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultricies, nunc nisl ultricies odio, quis aliquam nunc nisl ut nisl. Sed euismod, diam sit amet dictum ultricies, nunc nisl ultricies odio, quis aliquam nunc nisl ut nisl.
                </p>
            </div>
        </div>
    );
}

export default UserCard;