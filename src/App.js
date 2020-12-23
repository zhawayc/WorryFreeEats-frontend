import React from "react";
import {graphql, QueryRenderer} from "react-relay";
import environment from "./Environment";

function App() {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AppQuery($id: ID!) {
          recipe(id: $id) {
            RecipeID
            RecipeName
          }
        }
      `}
      variables={{id: "6663"}}
      render={({error, props}) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <div>User ID: {props.recipe.RecipeID}</div>;
      }}
    />
  );
}

export default App;
