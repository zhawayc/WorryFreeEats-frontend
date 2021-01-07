import React from "react";
import environment from "./Environment";
import userRegister from "./UserRegisterMutation";
import {Link} from "react-router-dom";

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            UserName: "",
            UserPass: "",
            FirstName: "",
            Email: ""
        };
    }

    handleChange(name, value){
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        userRegister(
            environment,
            this.state.UserName,
            this.state.UserPass,
            this.state.FirstName,
            this.state.Email
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
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstName" value={this.state.FirstName} onChange={(e)=>{this.handleChange("FirstName", e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" value={this.state.Email} onChange={(e)=>{this.handleChange("Email", e.target.value)}} />
                    </div>
                    <div>
                        <input type="submit" value="OK" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;