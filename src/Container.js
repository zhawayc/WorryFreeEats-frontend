import {Route} from "react-router-dom";
import App from './App';
import UpdateRecipe from "./UpdateRecipe";
import CreateRecipe from "./CreateRecipe";
import DeleteRecipe from "./DeleteRecipe.js";
import Recipe from "./Recipe";
import UpdateReview from "./UpdateReview";
import Recommendations from "./Recommendations";

function Container(containerProps){
    function helperRender(componentProps, Component){
        return(
            <Component {...{...componentProps, ...containerProps}}/>
        );
    }
    
    return(
        <div>
            <Route exact path="/" 
                render={props=>(helperRender(props,App))} />
            <Route path="/updateRecipe/:id" 
                render={(props)=>(helperRender(props,UpdateRecipe))} />
            <Route path="/createRecipe"
                render={(props)=>(helperRender(props,CreateRecipe))} />
            <Route path="/deleteRecipe/:id"
                render={(props)=>(helperRender(props,DeleteRecipe))} />
            <Route path="/recipe/:id"
                render={(props)=>(helperRender(props,Recipe))} />
            <Route path="/updateReview/:id" 
                render={(props)=>helperRender(props,UpdateReview)} />
            <Route path="/recommendations"
                render={(props)=>helperRender(props,Recommendations)} />
        </div>
    )
};

export default Container;