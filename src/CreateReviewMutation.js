import {graphql, commitMutation} from "react-relay";

const mutation=graphql`
    mutation CreateReviewMutation($reviewText: String, $recipeID: ID, $rating: Int, $userId: ID){
        addReview(ReviewText: $reviewText, RecipeID: $recipeID, Rating: $rating, UserId: $userId){
            ReviewId,
            ReviewText,
            RecipeID,
            Rating,
            User{
                UserId
                UserName
            }
        }
    }
`;

function createReview(
    environment,
    reviewText,
    recipeID,
    rating,
    userId
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                reviewText,
                recipeID,
                rating,
                userId
            }
        }
    );
}

export default createReview;