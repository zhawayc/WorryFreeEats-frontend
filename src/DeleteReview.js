import React from "react";
import {Link} from "react-router-dom";
import deleteReview from "./DeleteReviewMutation";
import environment from "./Environment";

class DeleteReview extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.match.params.id;
    }

    handleClick(){
        deleteReview(
            environment,
            this.id
        );
    }

    render(){
        return(
            <div>
                {console.log(this.props.reviewState.get(this.id))}
                <div>{`Delete Review of id: ${this.id}`}</div>
                <button onClick={()=>{this.handleClick()}}>OK!</button>
                <Link to={`/recipe/${this.props.reviewState.get(this.id).RecipeID}`}>Cancel</Link>
            </div>
        );
    }
}

export default DeleteReview;