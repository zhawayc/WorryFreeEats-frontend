import React from "react";
import { createPaginationContainer, graphql } from "react-relay";
import { Link } from "react-router-dom";
import Ingredients from "./Ingredients";

class Recipes extends React.Component{

    componentDidMount(){
        this.props.onGetList(this.props.query.recipes.edges.map(edge=>edge.node));
    }

    _loadMore(){
        this.props.relay.loadMore(
            5,
            error=>{
                console.log(error);
            }
        )
    }

    render(){
        const list_recipes = this.props.query.recipes.edges.map(edge=>{
            const recipe = edge.node;
            return (
                <tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td><img src={recipe.ImageUrl} alt="not found" width="200px" height="180px" /></td>
                    <td><Link {...this.props} to={`/recipe/${recipe.id}`}>
                        {recipe.RecipeName}
                        </Link>
                    </td>
                    <td><Ingredients recipe = {recipe}/></td>
                    <td><Link to={`/updateRecipe/${recipe.id}`}>Update</Link></td>
                    <td><Link to={`/deleteRecipe/${recipe.id}`}>Delete</Link></td>
                </tr>
            );
        })

        return (
            <div>
                <div>
                    <Link to="/recommendations">Get Today's Recipe Recommendation!</Link>
                </div>
                <div>
                    <Link to="/createRecipe">Create a new Recipe</Link>
                </div>
                <table border="solid">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Ingredients</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list_recipes}
                    </tbody>
                </table>
                <button onClick={()=>this._loadMore()}>Load more</button>
            </div>
        )
    }
}

/*
export default createFragmentContainer(Recipes, {recipes: graphql`
    fragment Recipes_recipes on Recipe@relay(plural:true) {
        id,
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
                count: {type: "Int", defaultValue: 5}
                cursor: {type: "ID", defaultValue: 0}
            ){
                recipes(
                    first:$count,
                    after:$cursor
                ) @connection(key: "Recipes_recipes", filters: []){
                    edges{
                        node{
                            id
                            RecipeName
                            ImageUrl
                            ...Ingredients_recipe
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