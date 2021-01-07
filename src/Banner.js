import React from "react";
import cookie from "react-cookies";
import { Link } from "react-router-dom";

class Banner extends React.Component{

    render(){
        const banner = (cookie.load("user"))?
        <div>{`Welcome User id: ${cookie.load("user")}`}</div>
        :<div>
            <div>
                <Link to="/userLogin">Login</Link>
            </div>
            <div>
                <Link to="/userRegister">Register</Link>
            </div>
        </div>;
        return(
            <div>
                {banner}
            </div>
        );
    }
}

export default Banner;