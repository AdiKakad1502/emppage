import React from "react";
import './Department.css';

function Department() {
    return (
        <div className="department-role">
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                DEPARTMENT
            </h1>
            <div className="box">
                    <div className="detail-head valign-text-middle nunito-normal-granite-gray-15px">
                        EMPLOYEE DETAILS
                    </div>
                    <div className="value valign-text-middle nunito-black-20px">
                        VALUE
                    </div>
            </div>
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                ROLE
            </h1>
            <div className="box">
                    <div className="detail-head valign-text-middle nunito-normal-granite-gray-15px">
                        EMPLOYEE DETAILS
                    </div>
                    <div className="value valign-text-middle nunito-black-20px">
                        VALUE
                    </div>
                </div>
            </div>
    );
}

export default Department;

/* <>
            <div className="department">
                <h2 className="departmentHeading">Department</h2>
                <div className="departmentBox">
                    <h4 className="deptHead">
                        Employee Details
                    </h4>
                    <h3 className="deptValue">
                        VALUE
                    </h3>
                    <h2 className="departmentHeading">Department</h2>
                    <div className="departmentBox">
                        <h4 className="deptHead">
                            Employee Details
                        </h4>
                        <h3 className="deptValue">
                            VALUE
                        </h3>
                    </div>
                </div>
            </div>
        </> */