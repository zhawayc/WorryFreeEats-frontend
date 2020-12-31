import { graphql } from "graphql";
import { QueryRenderer } from "react-relay";
import {Link} from "react-router-dom";
import environment from "./Environment";

function Recipe(props){
    const {id} = props.match.params;

    function renderDetails(props){
        console.log(props);
        return props.recipe.Ingredients.map(ingredient=>{
            return (<tr>
                <td>{ingredient.Name}</td>
                <td>{ingredient.AllergyType}</td>
            </tr>);
        });
    }

    return(
        <QueryRenderer
            environment={environment}
            query={graphql`
                query RecipeQuery($id: ID!){
                    recipe(id: $id){
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
            `}
            variables={{id}}
            render={({error, props})=>{
                if (error) {
                    return <div>Error!</div>;
                  }
                  if (!props) {
                    return <div>Loading...</div>;
                  }
                  return(
                    <div>
                        <Link to="/">Back</Link>
                        <h1>{`Details for Recipe: ${props.recipe.RecipeName}`}</h1>
                        <div style={{display:"flex"}}>
                            <img src={props.recipe.ImageUrl} />
                            <table border="solid">
                                <thead>
                                    <tr>
                                        <td>Ingredient</td>
                                        <td>AllergyType</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderDetails(props)}
                                </tbody>
                            </table>
                        </div>

                    </div>

                  );
            }}/>
    );
}

export default Recipe;