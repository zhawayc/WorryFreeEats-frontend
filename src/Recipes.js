import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

class Recipes extends React.Component{

    componentDidMount(){
        console.log(this.props);
        this.props.onGetList(this.props.recipes);
    }

    handleClick(id){
        this.props.history.push(`recipe/${id}`)
    }

    getAllergies(ingredients){
        let allergies = new Set();
        for(let ingredient of ingredients){
            if(ingredient.AllergyType=="NotAllergy"){
                continue;
            }
            allergies.add(ingredient.AllergyType);
        }
        let arr = new Array(...allergies);
        return arr.map(allergy=>(
            <div>{allergy}</div>
        ))
    }

    render(){
        const list_recipes = this.props.recipes.map(recipe=>{
            console.log(recipe.Ingredients);
            const ingredients = recipe.Ingredients.map(i=><div>{i.Name}</div>)
            return (
                <tr>
                    <td>{recipe.RecipeID}</td>
                    <td><img src={recipe.ImageUrl} alt="not found" width="200px" height="180px" /></td>
                    <td onClick={()=>{this.handleClick(recipe.RecipeID)}}>
                        {recipe.RecipeName}
                    </td>
                    <td>{this.getAllergies(recipe.Ingredients)}</td>
                    <td>{ingredients}</td>
                    <td><Link to={`/updateRecipe/${recipe.RecipeID}`}>Update</Link></td>
                    <td><Link to={`/deleteRecipe/${recipe.RecipeID}`}>Delete</Link></td>
                </tr>
            );
        })

        return (
            <div>
                <Link to="/createRecipe">Create a new Recipe</Link>
                <table border="solid">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Name</td>
                            <td style={{backgroundColor: "royalblue"}}>Attention</td>
                            <td>Ingredients</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list_recipes}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default createFragmentContainer(Recipes, {recipes: graphql`
    fragment Recipes_recipes on Recipe@relay(plural:true) {
        RecipeID,
        RecipeName,
        ImageUrl,
        Ingredients{
            IngredientId
            Name
            AllergyType
        }
    }
`});