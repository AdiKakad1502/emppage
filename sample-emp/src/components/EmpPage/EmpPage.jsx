import React from 'react';
import ProfilePic from '../ProfilePic/ProfilePic.jsx';
import TeamMembers from '../TeamMembers/TeamMembers.jsx';
import Department from '../Department/Department.jsx';
import Employee from '../EmployeeDetails/Employee.jsx';
import UserCard from '../UserCard/UserCard.jsx';
import TaskBoard from '../TaskBoard/TaskBoard.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './EmpPage.css';


function EmpPage() {
    const [empData, setEmpData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/employees')
            .then((response) => {
                setEmpData(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    function handleChange(event) {
        setEmpData({ ...empData, [event.target.name]: event.target.value, });
    }

    function handleSave() {
        const url = 'http://localhost:8080/employees';
        const data = {
            name: empData.name,
            gender: empData.gender,

        }
        axios.put(url, data)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
    }

    function handleEdit() {
        setIsEditing(true);
    }
    return (
        <div className="container-center">
            <div className="screen desktop">
                <div className="flex-row">
                    <ProfilePic />
                    <Department />
                    <UserCard />
                </div>
                <div className="flex-row">
                    <Employee />
                    <TeamMembers />
                    <TaskBoard />
                </div>
                <div className="flex-row buttons">
                    {isEditing ? (
                        <>
                            <div className="save-button">
                                <div className="save-changes valign-text-middle">
                                    SAVE CHANGES
                                </div>
                            </div>
                            <div className="cancel-button">
                                <div className="cancel-changes valign-text-middle">
                                    CANCEL CHANGES
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="edit-button">
                            <div
                                onClick={handleEdit}
                                className="edit-changes valign-text-middle"
                            >
                                EDIT PROFILE
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EmpPage;