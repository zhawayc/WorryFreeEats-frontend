import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation DeleteReviewMutation($id: ID!){
        deleteReview(id: $id)
    }
`;

function deleteReview(
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

export default deleteReview;