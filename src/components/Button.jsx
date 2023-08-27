import {Component} from "react";

class Button extends Component{
    render(){
        const {text, type, onClickHandler} = this.props;
        return(
            <button className={type === 'prev' ? "carousel-control-prev" :  "carousel-control-next"}
                    type="button" data-bs-target="#carousel"
                    onClick={onClickHandler}>
              <span className={ type === 'prev' ? "carousel-control-prev-icon" : "carousel-control-next-icon"}
                    aria-hidden="true"></span>
              <span className="visually-hidden">{text}</span>
            </button>
        )
    }
}

export default Button;