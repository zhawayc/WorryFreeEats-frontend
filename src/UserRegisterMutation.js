import {graphql, commitMutation} from "react-relay";

const mutation = graphql`
    mutation UserRegisterMutation($UserName: String!, $UserPass: String!, $FirstName: String, $Email: String){
        userRegister(UserName: $UserName, UserPass: $UserPass, FirstName: $FirstName, Email: $Email){
            UserId
            UserName
            UserPass
            FirstName
            Email
        }
    }
`

function userRegister(
    environment,
    UserName,
    UserPass,
    FirstName,
    Email
){
    return commitMutation(
        environment,
        {
            mutation,
            variables:{
                UserName,
                UserPass,
                FirstName,
                Email
            }
        }
    )
}

export default userRegister;