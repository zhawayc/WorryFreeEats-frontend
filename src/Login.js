import React from "react";
import environment from "./Environment";
import userLogin from "./UserLoginMutation";
import {Link} from "react-router-dom";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            UserName: "",
            UserPass: ""
        };
    }

    handleChange(name, value){
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        userLogin(
            environment,
            this.state.UserName,
            this.state.UserPass
        );
    }

    render(){
        return(
            <div>
                <Link to="/">Back</Link>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input id="userName" value={this.state.UserName} onChange={(e)=>{this.handleChange("UserName",e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="userPass">Password</label>
                        <input id="password" value={this.state.UserPass} onChange={(e)=>{this.handleChange("UserPass", e.target.value)}} />
                    </div>
                    <div>
                        <input type="submit" value="OK" />
                    </div>
                </form>
                <Link to="/userRegister">don't have an account</Link>
            </div>
        );
    }
}

export default Login;