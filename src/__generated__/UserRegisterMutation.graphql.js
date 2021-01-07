/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserRegisterMutationVariables = {|
  UserName: string,
  UserPass: string,
  FirstName?: ?string,
  Email?: ?string,
|};
export type UserRegisterMutationResponse = {|
  +userRegister: ?{|
    +UserId: string,
    +UserName: ?string,
    +UserPass: ?string,
    +FirstName: ?string,
    +Email: ?string,
  |}
|};
export type UserRegisterMutation = {|
  variables: UserRegisterMutationVariables,
  response: UserRegisterMutationResponse,
|};
*/


/*
mutation UserRegisterMutation(
  $UserName: String!
  $UserPass: String!
  $FirstName: String
  $Email: String
) {
  userRegister(UserName: $UserName, UserPass: $UserPass, FirstName: $FirstName, Email: $Email) {
    UserId
    UserName
    UserPass
    FirstName
    Email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "Email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "FirstName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "UserName"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "UserPass"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "Email",
        "variableName": "Email"
      },
      {
        "kind": "Variable",
        "name": "FirstName",
        "variableName": "FirstName"
      },
      {
        "kind": "Variable",
        "name": "UserName",
        "variableName": "UserName"
      },
      {
        "kind": "Variable",
        "name": "UserPass",
        "variableName": "UserPass"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "userRegister",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "UserId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "UserName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "UserPass",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "FirstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "Email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserRegisterMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserRegisterMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "f33338c5d2365be2c1a444bbcc4a300d",
    "id": null,
    "metadata": {},
    "name": "UserRegisterMutation",
    "operationKind": "mutation",
    "text": "mutation UserRegisterMutation(\n  $UserName: String!\n  $UserPass: String!\n  $FirstName: String\n  $Email: String\n) {\n  userRegister(UserName: $UserName, UserPass: $UserPass, FirstName: $FirstName, Email: $Email) {\n    UserId\n    UserName\n    UserPass\n    FirstName\n    Email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '40d1f94236807f740b330a9d55e5a2e7';

module.exports = node;
