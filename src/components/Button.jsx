import {Component} from "react";
import classNames from "classnames";

class Button extends Component{
    constructor(props) {
        super(props);
        this.state = { activeBtn : null};
    }

    handleClick =(btn) =>{
        this.setState({activeBtn : btn});
    }
    render() {
        const { buttonText} = this.props;
        const {activeBtn} = this.state;

        const buttonClass = classNames(['btn btn-primary',
            activeBtn === buttonText ? 'active' : ""]);

        return(
            <button type="button" onClick={() => this.handleClick(buttonText)}
                    className={buttonClass}>{buttonText.toUpperCase()}</button>
        );
    }
}

export default Button;