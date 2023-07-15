import React from "react";
import './TeamMembers.css';

function TeamMembers() {
    return (
        <div className="team-members">
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                TEAM MEMBERS
            </h1>
            <DetailBox />
            <DetailBox />
            <DetailBox />
        </div>
    );
}

export default TeamMembers;

function DetailBox(props){
    return(
        <div className="box">
            <div className="detail-head valign-text-middle nunito-normal-granite-gray-15px">
                EMPLOYEE DETAILS
            </div>
            <div className="value valign-text-middle nunito-black-20px">
                VALUE
            </div>
        </div>
    );
}


/* <>
            <div className="teambox">
                <h2 className="teamHeading">Team Members</h2>
                <div className="teamValBox">
                    <h4 className="teamValHead">
                        Employee Details
                    </h4>
                    <h3 className="teamValue">
                        VALUE
                    </h3>
                </div>
                <div className="teamValBox">
                    <h4 className="teamValHead">
                        Employee Details
                    </h4>
                    <h3 className="teamValue">
                        VALUE
                    </h3>
                </div>

                <div className="teamValBox">
                    <h4 className="teamValHead">
                        Employee Details
                    </h4>
                    <h3 className="teamValue">
                        VALUE
                    </h3>
                </div>

            </div>
        </> */