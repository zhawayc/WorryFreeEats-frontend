import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation UpdateReviewMutation($ReviewId: ID!, $ReviewText: String, $RecipeID: ID, $Rating: Int, $UserId: ID){
        updateReview(ReviewId: $ReviewId, ReviewText: $ReviewText, RecipeID: $RecipeID, Rating: $Rating, UserId: $UserId){
            ReviewId
            ReviewText
            RecipeID
            Rating
            User{
                UserId
            }
        }
    }
`;

function updateReview(
    environment,
    ReviewId,
    ReviewText,
    RecipeID,
    Rating,
    UserId
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                ReviewId,
                ReviewText,
                RecipeID,
                Rating,
                UserId
            }
        }
    );
}

export default updateReview;
