import {Route} from "react-router-dom";
import App from './App';
import UpdateRecipe from "./UpdateRecipe";
import CreateRecipe from "./CreateRecipe";
import DeleteRecipe from "./DeleteRecipe.js";

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
        </div>
    )
};

export default Container;