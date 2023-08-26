import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: null
        }
    }

    setActive = (btn) =>{
        this.setState((state) => {
            const {button} = state;
            return { activeBtn : button === btn ? null : btn};
        })
    }
    onClickLeft =() => this.setActive('left');

    onClickRight =() => this.setActive('right');

    render(){
        const {activeBtn} = this.state;
        const btnClassRight = classNames('btn btn-danger',{
            "active" : activeBtn === "right"
        });

        const btnClassLeft = classNames('btn btn-primary',{
            "active" : activeBtn === "left"
        });
        return(
            <div className="btn-group" role="group">
                <button type="button"
                        className={btnClassLeft}
                        onClick={this.onClickLeft}
                >RIGHT
                </button>
                <button type="button"
                        className={btnClassRight}
                        onClick={this.onClickRight}
                >LEFT
                </button>
            </div>
        )
    }
}
BtnGroup.defaltProps={
    state: null

}
export default BtnGroup;
