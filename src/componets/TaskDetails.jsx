import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import "./Dateils.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();
    
    const handleBackButtonClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <button onClick={handleBackButtonClick}>
                    Voltar
                </button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint ad, praesentium voluptatibus quam veniam cum corrupti? Rerum ex, recusandae sint ratione asperiores incidunt voluptate soluta fuga sequi explicabo odit.</p>
            </div>
        </>
    )
}

export default TaskDetails;