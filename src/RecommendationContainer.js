import { createRefetchContainer, graphql } from "react-relay";
import React from "react";
import { Link } from "react-router-dom";
import cookie from "react-cookies";

class RecommendationContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allergy: ""
        };
    }

    handleClick(allergy){
        this.props.relay.refetch(
            {allergy}
        )
    }
    
    render(){
        const recommendationList = this.props.query.topRecipesWithoutAllergy.map(recipe=>(
            <tr>
                <td><Link to={`/recipe/${recipe.id}`}>{recipe.id}</Link></td>
                <td>{recipe.RecipeName}</td>
                <td><img style={{height: "50px", width: "80px"}} alt="not found" src={recipe.ImageUrl}/></td>
            </tr>
        ));

        return(
            <div>
                <h1>Top 10 recipes of the day without your allergy</h1>
                <label htmlFor="allergy">Please select your allergy</label>
                <select id="allergy" name="allergy" onChange={(e)=>this.handleClick(e.target.value)}>
                    <option>--</option>
                    {this.props.query.allergies.map(allergy=>(<option>{allergy}</option>))}
                </select>
                {console.log(cookie.loadAll())}
                
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Recipe Name</td>
                            <td>Image</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recommendationList}
                    </tbody>
                </table>
            </div>
        );
    }
}

/*
export default createRefetchContainer(
    RecommendationContainer,
    {
        recipes: graphql`
            fragment RecommendationContainer_recipes on Recipe@relay(plural:true){
                id
                RecipeName
                ImageUrl
            }
        `
    },
    graphql`
        query RecommendationContainerRefetchQuery($allergy: String){
            recipes: topRecipesWithoutAllergy(allergy: $allergy){
                ...RecommendationContainer_recipes
            }
        }
    `
);
*/

export default createRefetchContainer(
    RecommendationContainer,
    {
        query: graphql`
            fragment RecommendationContainer_query on Query
                @argumentDefinitions(allergy: {type: "String", defaultValue:"default"}){
                    topRecipesWithoutAllergy(allergy: $allergy){
                        id
                        RecipeName
                        ImageUrl
                    }
                    allergies
            }
        `
    },
    graphql`
        query RecommendationContainerRefetchQuery($allergy: String){
            ...RecommendationContainer_query @arguments(allergy: $allergy)
        }
    `
);