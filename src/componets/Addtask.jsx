import React, {useState} from 'react';


import Button from './Button';

import "./AddTask.css";

const AddTask = ({hendleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const hendleAddTaskClick = () => {
        hendleTaskAddition(inputData);
        setInputData('');
    };

    return (  
        <div className="add-tasks-container">
            <input 
                    onChange={handleInputChange}
                    value={inputData}
                    className='add-task-input'
                    type="text" 
            />

            <div className='add-task-button-container'>
                <button onClick={hendleAddTaskClick}>Adcionar</button>
            </div>
        </div>
    );
};
 
export default AddTask;