import React from "react";
import {graphql, QueryRenderer} from "react-relay";
import environment from "./Environment";
import Recipes from "./Recipes";

function App(props) {

  function getProps(){
    console.log(props);
    return props;
  }

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery($id: ID!, $ingredientId: ID!) {
            recipe(id: $id) {
              RecipeID
              RecipeName
            }

            recipes {
              ...Recipes_recipes
            }

            ingredient(id: $ingredientId){
              IngredientId
              Name
            }
          }
      `}
      variables={{id: "6663", ingredientId: 2}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return(
          <div>
            <Recipes {...getProps()} recipes={props.recipes}/>
            <div>Ingredient ID: {props.ingredient.Name}</div>
          </div>
        );
      }}
    />
  );
}

export default App;
