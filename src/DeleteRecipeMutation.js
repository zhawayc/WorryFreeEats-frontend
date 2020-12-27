import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation DeleteRecipeMutation($RecipeID: ID!){
        deleteRecipe(RecipeID: $RecipeID)
    }
`;

function deleteRecipe(
    environment,
    RecipeID,
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                RecipeID
            }
        }
    );
}

export default deleteRecipe;