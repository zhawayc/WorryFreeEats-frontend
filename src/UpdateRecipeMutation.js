import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation UpdateRecipeMutation($RecipeID: ID!, $RecipeName: String, $ImageUrl: String){
        updateRecipe(RecipeID: $RecipeID, RecipeName: $RecipeName, ImageUrl: $ImageUrl){
            RecipeID
            RecipeName
            ImageUrl
        }
    }
`;

function updateRecipe(
    environment,
    RecipeID,
    RecipeName,
    ImageUrl
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                RecipeID,
                RecipeName,
                ImageUrl
            }
        }
    );
}

export default updateRecipe;
