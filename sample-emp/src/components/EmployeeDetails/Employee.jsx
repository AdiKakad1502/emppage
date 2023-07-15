import React from "react";
import './Employee.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
function Employee() {
    return (
        <div className="employee-details">
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                EMPLOYEE DETAILS
            </h1>
            <DetailBox />
            <DetailBox />
            <DetailBox />
            <DetailBox />
            <DetailBox />
        </div> 
    );
}

export default Employee;

function DetailBox(){
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
            <div className="empBox">
                <h2 className="empHeading">Employee Details</h2>
                <div className="empValBox">
                    <h4 className="empValHead">
                        Employee Details
                    </h4>
                    <h3 className="empValue">
                        VALUE
                    </h3>
                </div>
                <div className="empValBox">
                    <h4 className="empValHead">
                        Employee Details
                    </h4>
                    <h3 className="empValue">
                        VALUE
                    </h3>
                </div>

                <div className="empValBox">
                    <h4 className="empValHead">
                        Employee Details
                    </h4>
                    <h3 className="empValue">
                        VALUE
                    </h3>
                </div>
                <div className="empValBox">
                    <h4 className="empValHead">
                        Employee Details
                    </h4>
                    <h3 className="empValue">
                        VALUE
                    </h3>
                </div>
                <div className="empValBox">
                    <h4 className="empValHead">
                        Employee Details
                    </h4>
                    <h3 className="empValue">
                        VALUE
                    </h3>
                </div>

            </div>
        </> */