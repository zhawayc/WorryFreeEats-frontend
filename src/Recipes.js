import React from "react";
import { createPaginationContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";

class Recipes extends React.Component{

    componentDidMount(){
        console.log(this.props);
        this.props.onGetList(this.props.query.recipes.edges.map(edge=>edge.node));
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
        console.log(this.props);
        const list_recipes = this.props.query.recipes.edges.map(edge=>{
            const recipe = edge.node;
            const ingredients = recipe.Ingredients.map(i=><div>{i.Name}</div>)
            return (
                <tr>
                    <td>{recipe.RecipeID}</td>
                    <td><img src={recipe.ImageUrl} alt="not found" width="200px" height="180px" /></td>
                    <td><Link {...this.props} to={`/recipe/${recipe.RecipeID}`}>
                        {recipe.RecipeName}
                        </Link>
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

/*
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
*/

export default createPaginationContainer(
    Recipes,
    {
        query: graphql`
            fragment Recipes_query on Query
            @argumentDefinitions(
                count: {type: "Int", defaultValue:10}
                cursor: {type: "ID", defaultValue: 2}
            ){
                recipes(
                    first:$count,
                    after:$cursor
                ) @connection(key: "Recipes_recipes"){
                    edges{
                        node{
                            RecipeID
                            RecipeName
                            ImageUrl
                            Ingredients{
                                IngredientId
                                Name
                                AllergyType
                            }
                        }
                    }
                }
            }
        `
    },
    {
        direction: "forward",
        getVariables(props, {count, cursor}){
            return {
                count,
                cursor
            };
        },
        getFragmentVariables(preVars, totalCount){
            return {
                ...preVars,
                count: totalCount
            };
        },
        query: graphql`
            query RecipesQuery(
                $count: Int,
                $cursor: ID
            ){
                ...Recipes_query @arguments(count: $count cursor: $cursor)
            }
        `
    }
);