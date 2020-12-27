import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation CreateRecipeMutation($RecipeName: String!, $ImageUrl: String){
        addRecipe(RecipeName:$RecipeName, ImageUrl:$ImageUrl){
            RecipeID
            RecipeName
            ImageUrl
        }
    }
`;

function createRecipe(
    environment,
    RecipeName,
    ImageUrl
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                RecipeName,
                ImageUrl
            }
        }
    );
}

export default createRecipe;