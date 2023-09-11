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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange = (event) => {
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
    handleSubmit = () => {

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
                ...prevState, submitted : !prevState.submitted
            }
        })
    }
    render(){
        if(this.state.submitted === false){
            return(
                <div className="container pt-3">
                    <MyForm state={this.state} handelChange={this.handelChange} handelSubmit={this.handleSubmit} handleChecked={this.handleChecked}/>
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
