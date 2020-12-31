import React from "react";
import updateRecipe from "./UpdateRecipeMutation";
import environment from "./Environment";
import {Link} from "react-router-dom";

class UpdateRecipe extends React.Component{
    constructor(props){
        super(props);
        this.id = props.match.params.id;
        this.state={
            RecipeName:"",
            ImageUrl:""
        }
    }

    componentDidMount(){
        console.log(this.props.recipeState);
        const recipe = this.props.recipeState.get(this.id);
        this.setState({
            RecipeName: recipe.RecipeName,
            ImageUrl: recipe.ImageUrl
        })
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
        updateRecipe(environment, this.id, this.state.RecipeName, this.state.ImageUrl);
    }

    render(){
        return (
            <div>
                <Link to="/">Back</Link>
                <div>{`Update Recipe for ${this.id}`}</div>
                <form onSubmit={e=>{this.handleSubmit(e)}}>
                    <div>
                        <label htmlFor="name">Recipe Name</label>
                        <input id="name" value={this.state.RecipeName} onChange={(e)=>{this.handleChangeName(e.target.value)}} />
                    </div>
                    <div>
                        <label htmlFor="url">Image Url</label>
                        <input id="url" value={this.state.ImageUrl} onChange={e=>{this.handleChangeUrl(e.target.ImageUrl)}} />
                    </div>
                    <div>
                        <input type="submit" value="OK"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateRecipe;