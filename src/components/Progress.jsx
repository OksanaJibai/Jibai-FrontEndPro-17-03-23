import React from "react";
import classNames from "classnames";

class Progress extends React.Component{
    render(){
        const {percentage} = this.props;
        const alertName = classNames('progress-bar',
            {"bg-success": (percentage >= 0 && percentage <= 25)},
            {"bg-info": (percentage >= 26 && percentage <= 50)},
            {"bg-warning": (percentage >= 51 && percentage <= 75)},
            {"bg-danger": (percentage >= 76 && percentage <= 100)}
        );
        const width = `${percentage}%`;

        return (
            <div className="progress">
                <div className={alertName}
                     role="progressbar"
                     aria-valuenow={this.percentage} aria-valuemin="0" aria-valuemax="100"
                     aria-label="progressbar" style={{width}}>{width}
                </div>
            </div>
        );
    }
}

export default Progress;
