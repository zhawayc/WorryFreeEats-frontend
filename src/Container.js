import {Route} from "react-router-dom";
import App from './App';
import UpdateRecipe from "./UpdateRecipe";
import CreateRecipe from "./CreateRecipe";
import DeleteRecipe from "./DeleteRecipe.js";
import Recipe from "./Recipe";
import CreateReview from "./CreateReview";
import DeleteReview from "./DeleteReview";
import UpdateReview from "./UpdateReview";
import Recommendations from "./Recommendations";
import Login from "./Login";
import Register from "./Register";

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
            <Route path="/createReview/:id"
                render={(props)=>helperRender(props,CreateReview)} />
            <Route path="/updateReview/:id" 
                render={(props)=>helperRender(props,UpdateReview)} />
            <Route path="/recommendations"
                render={(props)=>helperRender(props,Recommendations)} />
            <Route path="/deleteReview/:id"
                render={(props)=>helperRender(props,DeleteReview)} />
            <Route path="/userLogin"
                render={(props)=>helperRender(props,Login)} />
            <Route path="/userRegister"
                render={(props)=>helperRender(props,Register)} />
        </div>
    )
};

export default Container;