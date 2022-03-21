import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";

import AddTask from './componets/Addtask';
import Header from './componets/Header';
import Tasks from "./componets/Tasks";
import TaskDetails from "./componets/TaskDetails"


const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler livros',
            completed: true,
        }, 
    ]);

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) return { ...task, completed: !task.completed};

            return task;
        });
        setTasks(newTasks);
    }

    const hendleTaskAddition = (taskTitle) =>  {
        const newTask = [... tasks, {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
            },
        ]

        setTasks(newTask);
    };

    const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter((tasks) => tasks.id !== taskId);
        setTasks(newTasks);
    };
    

    return (
        <Router>
            <div className="container">
                <Header />
                <Route
                    path="/" 
                    exact 
                    render = {() => (
                        <>
                            <AddTask hendleTaskAddition = {hendleTaskAddition} />
                            <Tasks
                                tasks = {tasks}
                                handleTaskClick = {handleTaskClick}
                                handleTaskDeletion = {handleTaskDeletion}
                            />

                            
                        </>
                    )}
                />

                <Route path="/:taskTitle" exact component={TaskDetails} />
            </div>
        </Router>
    ) 
}

export default App;