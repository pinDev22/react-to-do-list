

import React, { useState } from 'react'
import ToDoCard from './Card';
import ToDoForm from './Form';

export default function ToDo() {
    const [tasks, setTasks] = useState([]);

    function handleFormSubmit(event){
        event.preventDefault();
        // console.log(event.target.task.value);
        let newTask = event.target.task.value;
        setTasks([...tasks, newTask])
        event.target.task.value = '';
    }


    return (
        <>
            <h1 className='text-center'>My To-Do List</h1>
            <ToDoForm handleFormSubmit={handleFormSubmit} />
            <div className='row'>
                {tasks.map((task, idx) => <ToDoCard task={task} key={idx} />)}
            </div>
        </>
    )
}
