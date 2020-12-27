import App from "../Container";
import RecipeStore from "./RecipeStore";
import RecipeActions from "./RecipeActions";
import {Container} from "flux/utils";

function getStores(){
    return [RecipeStore];
}

function getState(){
    return {
        recipeState: RecipeStore.getState(),
        onGetList: RecipeActions.getList,
        //onAddRecipe: RecipeActions.addRecipe,
        //onUpdateRecipe: RecipeActions.updateRecipe,
        //onDeleteRecipe: RecipeActions.deleteRecipe
    }
}

export default Container.createFunctional(App, getStores, getState);