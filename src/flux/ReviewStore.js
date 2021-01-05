import { ReduceStore } from "flux/utils";
import Immutable from "immutable";
import RecipeDispatcher from "./RecipeDispatcher";
import RecipeActionTypes from "./RecipeActionTypes";

class ReviewStore extends ReduceStore{
    constructor(){
        super(RecipeDispatcher);
    }

    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch(action.type){
            case RecipeActionTypes.GET_REIVEWS:
                let newState=state;
                action.reviews.map(review=>{
                    console.log(review);
                    newState = newState.set(review.ReviewId, {
                        "ReviewId": review.ReviewId,
                        "ReviewText": review.ReviewText,
                        "Rating": review.Rating,
                        "RecipeID": review.RecipeID,
                        "UserId": review.User.UserId
                    });
                })
                console.log(newState);
                return newState;
            default:
                return state;
        }
    }
}

export default new ReviewStore();