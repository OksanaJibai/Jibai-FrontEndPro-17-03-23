import React from "react";
import Button from "./Button";

class BtnGroup extends React.Component{
    render(){

        const {buttonsData} = this.props;

        return (
            <div className="btn-group" role="group">
                {buttonsData.map(element =>{
                    const {id, buttonText} = element;
                    return <Button key={id} buttonText={buttonText}/>
                })
                }
            </div>
        )
    }
}

export default BtnGroup;
