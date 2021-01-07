import React from "react";
import {Link} from "react-router-dom";
import createReview from "./CreateReviewMutation";
import environment from "./Environment";
import cookie from "react-cookies";

class CreateReview extends React.Component{

    constructor(props){
        super(props);
        this.state={
            reviewText: "",
            rating: null
        }
    }

    handleChange(name, value){
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        createReview(
            environment,
            this.state.reviewText,
            this.props.match.params.id,
            parseInt(this.state.rating),
            cookie.load("user")
        );
    }

    render(){
        return(
            <div>
                <Link to="/">Back</Link>
                <h1>{`Create Review for Recipe id: ${this.props.match.params.id}`}</h1>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <div>
                        <label>Review Text</label>
                        <input value={this.state.reviewText} onChange={(e)=>{this.handleChange("reviewText",e.target.value)}} />
                    </div>
                    <div>
                        <label>Rating</label>
                        <input value={this.state.rating} onChange={(e)=>{this.handleChange("rating",e.target.value)}} />
                    </div>
                    <div>
                        <input type="submit" value="OK"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateReview;