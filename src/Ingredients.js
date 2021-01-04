import React from "react";
import {graphql, createPaginationContainer} from "react-relay";

class Ingredients extends React.Component{

    getAllergies(ingredients){
        let allergies = new Set();
        for(let ingredient of ingredients.edges){
            console.log(ingredient);
            if(ingredient.node.AllergyType=="NotAllergy"){
                continue;
            }
            allergies.add(ingredient.node.AllergyType);
        }
        let arr = new Array(...allergies);
        return arr.map(allergy=>(
            <div>{allergy}</div>
        ))
    }

    _loadMore(){
        if(!this.props.relay.hasMore() || this.props.relay.isLoading()){
          return;
        }
        this.props.relay.loadMore(
            4,
            error=>{
                console.log(error);
            }
        )
    }
    
    render(){
        const ingredients = this.props.recipe.Ingredients.edges.map(edge=><div>{edge.node.Name}</div>);
        return(
            <div>
                {ingredients}
                <button onClick={()=>{this._loadMore()}}>Load more</button>
            </div>
        );
    }
}

export default createPaginationContainer(
    Ingredients,
    {
        recipe: graphql`
            fragment Ingredients_recipe on Recipe
                @argumentDefinitions(
                count: {type: "Int", defaultValue: 4}
                cursor: {type: "ID", defaultValue: 0}
                ){
                    id
                    Ingredients(
                        first: $count,
                        after: $cursor
                    ) @connection(key: "Ingredients_Ingredients", filters: []){
                        pageInfo{
                            endCursor
                        }
                        edges{
                            node{
                                id
                                Name
                                AllergyType
                            }
                        }
                    }
                }
    `},
    {
        direction: "forward",
        getConnectionFromProps(props){
            return props.recipe.Ingredients;
        },
        getVariables(props, {count, cursor}){
            return {
                count,
                cursor,
                id: props.recipe.id
            };
        },
        query: graphql`
            query IngredientsQuery(
                $count: Int
                $cursor: ID
                $id: ID!
            ){
                recipe(id: $id){
                    ...Ingredients_recipe @arguments(count: $count cursor:$cursor)
                }
            }
        `
        
    }
);