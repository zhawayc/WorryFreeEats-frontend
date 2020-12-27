import RecipeDispatcher from "./RecipeDispatcher";
import RecipeActionTypes from "./RecipeActionTypes";

const Actions = {
    addRecipe(recipe){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.ADD_RECIPE,
            recipe
        })
    },
    getList(recipes){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.GET_LIST,
            recipes
        })
    },
    updateRecipe(recipe){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.UPDATE_RECIPE,
            recipe
        })
    },
    deleteRecipe(recipe){
        RecipeDispatcher.dispatch({
            type: RecipeActionTypes.DELETE_RECIPE,
            recipe
        })
    }
};

export default Actions;