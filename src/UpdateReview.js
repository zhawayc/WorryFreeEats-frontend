import React from "react";
import {Link} from "react-router-dom";
import environment from "./Environment";
import updateReview from "./UpdateReviewMutation";

class UpdateReview extends React.Component{
    constructor(props){
        super(props);
        this.id = this.props.match.params.id;
        this.state = {
            ReviewText: "",
            Rating: null,
        }
    }

    componentDidMount(){
        const {reviewState} = this.props;
        this.setState({
            ReviewText: reviewState.get(this.id).ReviewText,
            Rating: reviewState.get(this.id).Rating
        });
    }

    handleChangeReview(ReviewText){
        this.setState({
            ReviewText
        });
    }

    handleChangeRating(Rating){
        this.setState({
            Rating
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const {reviewState} = this.props;
        updateReview(
            environment,
            this.id,
            this.state.ReviewText,
            reviewState.get(this.id).RecipeID,
            this.state.Rating,
            reviewState.get(this.id).UserId
        );
    }
    
    render(){
        return(
            <div>
                {console.log(this.props.reviewState.get(this.id))}
                <Link to={`/recipe/${this.props.reviewState.get(this.id).RecipeID}`}>Back</Link>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                    <div>
                        <label htmlFor="reviewText">Review</label>
                        <input id="reviewText" value={this.state.ReviewText} onChange={(e)=>{this.handleChangeReview(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <input id="rating" value={this.state.Rating} onChange={e=>{this.handleChangeRating(e.target.value)}} />
                    </div>
                    <div>
                        <input type="submit" value="OK"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateReview;