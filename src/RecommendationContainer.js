import { createRefetchContainer, graphql } from "react-relay";
import React from "react";

class RecommendationContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allergy: ""
        };
    }

    handleChange(allergy){
        this.setState({allergy});
    }

    handleClick(){
        this.props.relay.refetch(
            {allergy: this.state.allergy}
        )
    }
    
    render(){
        const recommendationList = this.props.query.topRecipesWithoutAllergy.map(recipe=>(
            <tr>
                <td>{recipe.id}</td>
                <td>{recipe.RecipeName}</td>
                <td><img style={{height: "50px", width: "80px"}} alt="not found" src={recipe.ImageUrl}/></td>
            </tr>
        ));

        return(
            <div>
                <h1>Recommendations for 10 recipes without your allergy</h1>
                <div>e.g. MilkAllergy, EggAllergy, WheatAllergy, FishAllergy, ShellfishAllergy ...</div>
                <label htmlFor="allergy">
                    <input 
                        id="allergy" 
                        placeholder="your allergy" 
                        onChange={(e)=>{this.handleChange(e.target.value)}}
                        />
                </label>
                <button onClick={()=>{this.handleClick()}}>OK!</button>
                
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
            }
        `
    },
    graphql`
        query RecommendationContainerRefetchQuery($allergy: String){
            ...RecommendationContainer_query @arguments(allergy: $allergy)
        }
    `
);