import {Component} from "react";

class Collapse extends Component{
    constructor(props) {
        super(props);
        this.state = {
            opened : props.opened
        }
    }
    toggleCollapse = () => {
        this.setState(prevState =>{
           return {opened: !prevState.opened}
        })
    }
    render(){
        const {text} = this.props;
        const {opened} = this.state;
        return (<div>
                   <p>
                        {/*eslint-disable-next-line*/}
                       <a className="btn btn-primary" data-bs-toggle="collapse"
                          href="#" role="button"
                          aria-expanded="false"
                          onClick={this.toggleCollapse}> Push to {opened ? "Hide" : "Show"}
                       </a>
                   </p>
                   {opened &&
                       <div className="card card-body">
                           {text}
                       </div>
                   }
                </div>
        )
    }
}

Collapse.defaultProps = {
    opened : true
}
export default Collapse;
