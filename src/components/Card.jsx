import {Component} from "react";

class Card extends Component{
    static Body = ({children}) =>{
        return(
            <div className="card-body">
                {children}
            </div>
        )
    }

    static Title = ({children}) =>{
        return (
            <h4 className="card-title">
                {children}
            </h4>
        )
    }

    static Text = ({children}) =>{
        return(
            <p className="card-title">
                {children}
            </p>
        )
    }
    render(){
        return(
            <div className="card">
                {this.props.children}
            </div>
        )
    }

}

export default Card;
