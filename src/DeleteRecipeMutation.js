import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation DeleteRecipeMutation($id: ID!){
        deleteRecipe(id: $id)
    }
`;

function deleteRecipe(
    environment,
    id,
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                id
            }
        }
    );
}

export default deleteRecipe;