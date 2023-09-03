import React from "react";
import Item from "./Item";
import {uniqueId} from "lodash";


class TodoBox extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            newTask : '',
            tasks : []
        }
    }

    handleChange = (event) =>{
        this.setState(prevState =>{
            return {
                ...prevState,
                newTask : event.target.value
            }
        })
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        const newTask = {
            id : +uniqueId(),
            text : this.state.newTask
        }
        this.setState({newTask: "", tasks: [newTask, ...this.state.tasks]})
    }
    handleRemove =(index) =>{
        const tasks = [...this.state.tasks];
        tasks.splice(index,1);
        this.setState({tasks})
    }
    render(){
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleFormSubmit}>
                        <div className="me-3">
                            <input type="text"
                                   value={this.state.newTask}
                                   onChange={this.handleChange}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit"
                                className="btn btn-primary"
                                disabled={!Boolean(this.state.newTask)}
                        >add</button>
                    </form>
                </div>
                {this.state.tasks.map((task, id) =>{
                    return <Item key={id}
                                 task={task}
                                 onRemove={() => this.handleRemove(id)}/>
                })}
            </div>
        );
    }
}

export default TodoBox;
