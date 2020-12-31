import App from "../Container";
import RecipeStore from "./RecipeStore";
import RecipeActions from "./RecipeActions";
import {Container} from "flux/utils";
import ReviewStore from "./ReviewStore";

function getStores(){
    return [RecipeStore, ReviewStore];
}

function getState(){
    return {
        recipeState: RecipeStore.getState(),
        onGetList: RecipeActions.getList,
        reviewState: ReviewStore.getState(),
        onGetReviews: RecipeActions.getReviews
        //onAddRecipe: RecipeActions.addRecipe,
        //onUpdateRecipe: RecipeActions.updateRecipe,
        //onDeleteRecipe: RecipeActions.deleteRecipe
    }
}

export default Container.createFunctional(App, getStores, getState);