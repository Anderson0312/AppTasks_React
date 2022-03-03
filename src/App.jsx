import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter , Route } from 'react-router-dom';

import "./App.css";

import AddTask from './componets/Addtask';
import Header from './componets/Header';
import Tasks from "./componets/Tasks";


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
            if (task.id === taskId) return { ...task, completed: !task.completed}

            return task;
        })
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
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route 
                    path="/" 
                    exact 
                    render= {() => (
                        <>
                            <AddTask hendleTaskAddition={hendleTaskAddition} />
                            <Tasks 
                                tasks= {tasks} 
                                handleTaskClick={handleTaskClick} 
                                handleTaskDeletion={handleTaskDeletion}
                             />
                        </>
                    )}
                />
            </div>
        </ BrowserRouter>  
    ) 
}

export default App;