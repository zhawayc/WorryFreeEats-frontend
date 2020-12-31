import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import RecipeActionTypes from "./RecipeActionTypes";
import RecipeDispatcher from "./RecipeDispatcher";

class RecipeStore extends ReduceStore{
    constructor(){
        super(RecipeDispatcher);
    }

    getInitialState(){
        return Immutable.OrderedMap();
    }

    reduce(state, action){
        switch(action.type){
            case RecipeActionTypes.GET_LIST:
                let newState = state;
                for(let act of action.recipes){
                    newState = newState.set(act.RecipeID, {
                        "RecipeID": act.RecipeID, 
                        "RecipeName": act.RecipeName, 
                        "ImageUrl": act.ImageUrl
                    });
                }
                return newState;
            default:
                return state;
        }
    }
}

export default new RecipeStore();