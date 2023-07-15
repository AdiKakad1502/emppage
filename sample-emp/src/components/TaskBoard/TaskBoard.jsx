import React from "react";
import "./TaskBoard.css";

function TaskBoard(){
    return(
        <div className="task-board">
            <h1 className="title valign-text-middle nunito-normal-black-26px">
                ALLOTTED TASKS
            </h1>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
        </div>
    );
}
export default TaskBoard;

function Task(){
    return(
        <div className="task">
            <div className="taskName valign-text-middle nunito-normal-black-20x">
                TASK NAME
            </div>
            <ToggleSwitch />
        </div>
    );
}

function ToggleSwitch(){
    return(
        <div className="toggleSwitch">
            <div className="ellipse">
            </div>
        </div>
    );
}