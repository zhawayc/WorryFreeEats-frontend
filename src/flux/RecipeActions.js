import RecipeDispatcher from "./RecipeDispatcher";
import RecipeActionTypes from "./RecipeActionTypes";

const Actions = {
    getList(recipes){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.GET_LIST,
            recipes
        })
    },
    getReviews(reviews){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.GET_REIVEWS,
            reviews
        })
    }
};

export default Actions;