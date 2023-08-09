import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './task';

const Taskslist = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
               fetchTasks(); 


    }, [])


    const deleteTask = (obj) => {
        deleteTaskAPI(obj)

        // setTaskList(tempList)
    }

    const  updateListArray = async (obj, index) => {
        updateTaskAPI(obj.id,obj)
        // tempList[index] = obj
        // setTaskList(tempList)
        // window.location.reload()
        console.log("heeere",obj)
    }


    const updateTaskAPI = async (taskId, updatedTaskObj) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/tasks/${updatedTaskObj.id}/`, {
            method: 'PUT', // or 'PATCH'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTaskObj),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Update the local task list with the updated task
        const updatedList = taskList.map(task =>
            task.id === taskId ? updatedTaskObj : task
        );
        setTaskList(updatedList);
    } catch (error) {
        console.error('Error updating task:', error);
    }
};


    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {

        saveTaskAPI(taskObj)
        setTaskList(taskList)
        setModal(false)
    }
// here we will call api 

const fetchTasks = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/tasks/');  // Replace with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);  // Call console.log with the data to be logged
        setTaskList(data);
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
};
// save
const saveTaskAPI = async (taskObj) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskObj),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newTask = await response.json();
        setTaskList([...taskList, newTask]);
        setModal(false);
    } catch (error) {
        console.error('Error saving task:', error);
    }
};

// delete 
const deleteTaskAPI = async (taskId) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/tasks/${taskId}/`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedTaskList = taskList.filter(task => task.id !== taskId);
        setTaskList(updatedTaskList);  // Update the local task list
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};




    return (
        <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "task-container">
{taskList && taskList.map((obj, index) => (
    <Card
        key={index}  
        taskObj={obj}
        index={index}
        deleteTask={deleteTask}
        updateListArray={updateListArray}
    />
))}

            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}
            />
        </>
    );
};

export default Taskslist;