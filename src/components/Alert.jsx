import {Component} from "react";
import classNames from "classnames";

class Alert extends Component{
    render(){
        const {text, type} = this.props;
        const alertTypeClass = classNames("alert", type);

        return (
            <div className={alertTypeClass} role="alert">
                <p>{text}</p>
            </div>

        )
    }
}

export default Alert;
