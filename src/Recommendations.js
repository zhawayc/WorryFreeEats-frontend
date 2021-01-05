import React from "react";
import environment from "./Environment";
import {graphql, QueryRenderer} from "react-relay";
import RecommendationContainer from "./RecommendationContainer";
import { Link } from "react-router-dom";

class Recommendations extends React.Component{
    
    render(){
        const query = graphql`
            query RecommendationsQuery{
                ...RecommendationContainer_query
            }
        `; 

        return(
            <QueryRenderer 
                environment = {environment}
                query = {query}
                render={({error, props}) => {
                    if (error) {
                      return <div>Error!</div>;
                    }
                    if (!props) {
                      return <div>Loading...</div>;
                    }
                    return(
                      <div>
                        <Link to="/">Back</Link>
                        <RecommendationContainer query={props}/>
                      </div>
                    );
                  }}
            />
    
        )
    } 
}

export default Recommendations;