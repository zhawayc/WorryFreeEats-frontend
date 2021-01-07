import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation UserLoginMutation($UserName: String, $UserPass: String){
        userLogin(UserName: $UserName, UserPass: $UserPass){
            UserId
            UserName
            UserPass
            FirstName
            Email
        }
    }
`

function userLogin(
    environment,
    UserName,
    UserPass
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                UserName,
                UserPass
            }
        }
    )
}

export default userLogin;