import React, {useState} from "react";
import Item from "./Item";
import {uniqueId} from "lodash";

const TodoBox = () =>{
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState([])


    const handleChange = (event) =>{
        setNewTask(event.target.value);
    }

    const handleFormSubmit =(event) =>{
        event.preventDefault();
        const newTaskObj = {
            id : +uniqueId(),
            text : newTask
        }
        setNewTask("");
        setTasks([newTaskObj, ...tasks]);
    }

    const handleRemove =(index) => {
        const updateTasks = tasks.filter((task, i) => i !== index);
        setTasks(updateTasks);
    }
    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={handleFormSubmit}>
                    <div className="me-3">
                        <input type="text"
                               value={newTask}
                               onChange={handleChange}
                               required=""
                               className="form-control"
                               placeholder="I am going..."/>
                    </div>
                    <button type="submit"
                            className="btn btn-primary"
                            disabled={!Boolean(newTask)}
                    >add</button>
                </form>
            </div>
            {tasks.map((task, id) =>{
                return <Item key={id}
                             task={task}
                             onRemove={() => handleRemove(id)}/>
            })}
        </div>
    );
}

export default TodoBox;
