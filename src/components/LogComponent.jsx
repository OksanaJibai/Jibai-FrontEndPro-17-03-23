import React from "react";

class LogComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            log : [],
            value : 0
        }
    }
    handleAdd = () =>{
        const {log, value} = this.state;
        const newValue = value + 1
        const newLog = [newValue, ...log];
        this.setState({
            log: newLog,
            value : newValue
        });
    }

    handleSubtract = () =>{
        const {log, value} = this.state;
        const newValue = value - 1;
        const newLog = [newValue, ...log]
        this.setState({
            log: newLog,
            value : newValue
        });
    }

    handleDelete = (index) =>{
        const {log} = this.state;
        const newLog = [...log];
        newLog.splice(index, 1);
        this.setState({
            log : newLog
        })
    }

    render(){
        const {log} = this.state;
        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button"
                            className="btn btn-outline-success"
                            onClick={this.handleAdd}
                    >
                        +
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger"
                            onClick={this.handleSubtract}
                    >
                        -
                    </button>
                </div>

                <div className="list-group">
                    {log.map((item, index) => (
                        <button
                            key={index}
                            type="button"
                            className="list-group-item list-group-item-action"
                            onClick={this.handleDelete.bind(this, index)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

LogComponent.defaultProps ={
    log: [],

}

export default LogComponent;
