import React, {Component} from "react";

class MyForm extends Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange = (event) => {
        this.props.handelChange(event);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handelSubmit()
    }
    render(){
        const {state, handleChecked} = this.props;
        return (
            <form name="myForm" onSubmit={this.handleSubmit}
             >
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="col-form-label">Email</label>
                    <input type="email"
                           name="email"
                           className="form-control"
                           id="email"
                           placeholder="Email"
                           onChange={this.handelChange}
                           defaultValue={state.email}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password" className="col-form-label">Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="password"
                           placeholder="Password"
                           onChange={this.handelChange}
                           defaultValue={state.password}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="address" className="col-form-label">Address</label>
                    <textarea className="form-control"
                              name="address"
                              id="address"
                              placeholder="1234 Main St"
                              onChange={this.handelChange}
                              defaultValue={state.address} >
                </textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="col-form-label">City</label>
                    <input type="text"
                           className="form-control"
                           name="city"
                           id="city"
                           onChange={this.handelChange}
                           defaultValue={state.city}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="country" className="col-form-label">Country</label>
                    <select id="country"
                            name="country"
                            className="form-control"
                            onChange={this.handelChange}
                            defaultValue={state.country}
                    >
                        <option>Choose</option>
                        <option value="ukraine">Ukraine</option>
                        <option value="croatia">Croatia</option>
                        <option value="portugal">Portugal</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="rules">
                            <input id="rules" type="checkbox"
                                   name="acceptRules"
                                   className="form-check-input"
                                   onChange={handleChecked}
                                   checked={state.acceptRules}

                            />
                            Accept Rules
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" >Sign in</button>
            </form>
    );
    }

}

export default MyForm;
