import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation UpdateRecipeMutation($id: ID!, $RecipeName: String, $ImageUrl: String){
        updateRecipe(id: $id, RecipeName: $RecipeName, ImageUrl: $ImageUrl){
            id
            RecipeName
            ImageUrl
        }
    }
`;

function updateRecipe(
    environment,
    id,
    RecipeName,
    ImageUrl
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                id,
                RecipeName,
                ImageUrl
            }
        }
    );
}

export default updateRecipe;
