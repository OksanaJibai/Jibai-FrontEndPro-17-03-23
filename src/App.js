import {Component} from "react";
import MyForm from "./components/MyForm";
import Table from "./components/Table";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : "",
            address : "",
            city : "",
            country : '',
            acceptRules : false,
            submitted : false
        }
    }

    handleChange = (event) => {
        const target = event.target;

        this.setState({[target.name]: target.value})
    }

    handleChecked = (event) =>{
        this.setState(prevState =>{
            return {
                ...prevState, acceptRules : event.target.checked
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.acceptRules) return
        this.setState(prevState =>{
            return {
                ...prevState, submitted : !this.state.submitted
            }
        })
    }

    handleBackBtn = () => {
        this.setState(prevState =>{
            return{
                ...prevState, submitted : !this.state.submitted
            }
        })
    }
    render(){
        if(this.state.submitted === false){
            return(
                <div className="container pt-3">
                    <MyForm state={this.state} handelChange={this.handleChange} handelSubmit={this.handleSubmit} handleChecked={this.handleChecked}/>
                </div>
            )
        }else {
            return (
                <div className="container pt-3">
                    <Table data={this.state} handleBackBtn={this.handleBackBtn}/>
                </div>
            )
        }
    }

}

export default App;
