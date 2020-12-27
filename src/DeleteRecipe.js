import React from "react";
import deleteRecipe from "./DeleteRecipeMutation";
import environment from "./Environment";
import {Link} from "react-router-dom";

class DeleteRecipe extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.match.params.id;
    }
    
    handleClick(){
        deleteRecipe(
            environment,
            this.id
        )
    }

    render(){
        return(
            <div> 
                <div>{`Delete recipe id: ${this.id}`}</div>           
                <button onClick={()=>{this.handleClick()}}>OK</button>
                <Link to="/">Cancel</Link>
            </div>
        )
    }
}

export default DeleteRecipe;