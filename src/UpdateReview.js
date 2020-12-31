import React from "react";

class UpdateReview extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                Hello World
                {console.log(this.props)}
            </div>
        )
    }
}

export default UpdateReview;