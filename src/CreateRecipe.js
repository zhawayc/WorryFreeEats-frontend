import React from "react";
import createRecipe from "./CreateRecipeMutation";
import environment from "./Environment";

class CreateRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            RecipeName:"",
            ImageUrl:""
        };
    }

    handleChangeName(RecipeName){
        this.setState({
            RecipeName
        })
    }

    handleChangeUrl(ImageUrl){
        this.setState({
            ImageUrl
        })
    }

    handleSubmit(e){
        e.preventDefault();
        createRecipe(environment, this.state.RecipeName, this.state.ImageUrl);
    }
    
    render(){
        return (
            <div>
                <div>Create Recipe</div>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                    <div>
                        <label htmlFor="name">Recipe Name</label>
                        <input id="name" value={this.state.RecipeName} onChange={(e)=>{this.handleChangeName(e.target.value)}}/>
                    </div>
                    <div>
                        <label htmlFor="url">Image Url</label>
                        <input id="url" value={this.state.ImageUrl} onChange={e=>{this.handleChangeUrl(e.target.value)}}/>
                    </div>
                    <div>
                        <input type="submit" value="OK"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateRecipe;