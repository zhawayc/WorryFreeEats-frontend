import React from "react";
import { graphql } from "graphql";
import { QueryRenderer } from "react-relay";
import {Link} from "react-router-dom";
import environment from "./Environment";
import cookie from "react-cookies";

class Recipe extends React.Component{

    constructor(props){
        super(props);
        this.id = props.match.params.id;
        this.reviews=null;
        this.firstRender=false;
    }

    renderDetails(props){
        return props.recipe.Ingredients.edges.map(ingredient=>{
            return (<tr>
                <td>{ingredient.node.Name}</td>
                <td>{ingredient.node.AllergyType}</td>
            </tr>);
        });
    }
    renderReviews(props){
        
        return props.reviewsByRecipeId.map(review=>{
            return (<tr>
                <td>{review.ReviewText}</td>
                <td>{review.Rating}</td>
                <td>{review.User.UserId}</td>
                <td>{review.User.UserName}</td>
                <td><Link to={`/updateReview/${review.ReviewId}`}>Update</Link></td>
                <td><Link to={`/deleteReview/${review.ReviewId}`}>Delete</Link></td>
            </tr>);
        })
    }

    render(){
        return(
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query RecipeQuery($id: ID!){
                        recipe(id: $id){
                            id
                            RecipeName
                            ImageUrl
                            Ingredients(first: 20, after: 0){
                                edges{
                                    node{
                                        id
                                        Name
                                        AllergyType
                                    }
                                }

                            }
                        }
                        reviewsByRecipeId(id: $id){
                            ReviewId
                            ReviewText
                            Rating
                            RecipeID
                            User{
                                UserId
                                UserName
                            }
                        }
                    }
                `}
                variables={{id:this.id}}

                render={({error, props})=>{
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    this.reviews=props.reviewsByRecipeId;
                    if(!this.firstRender){
                        this.props.onGetReviews(this.reviews);
                        this.firstRender=true;
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
                                        {this.renderDetails(props)}
                                    </tbody>
                                </table>
                            </div>
                            <h1>Reviews List</h1>
                            {
                                cookie.load("user")?
                                <Link to={`/createReview/${props.recipe.id}`}>Add a new Review!</Link>:
                                <Link to="/userLogin">Login to add Review!</Link>
                            }
                            <table border="solid">
                                <thead>
                                    <tr>
                                        <td>Review Text</td>
                                        <td>Rating</td>
                                        <td>User Id</td>
                                        <td>User Name</td>
                                        <td>Update</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderReviews(props)}
                                </tbody>
                            </table>
                            <div>{console.log(this.props)}</div>
                        </div>

                    );
                }}/>
            );
        }
}

export default Recipe;