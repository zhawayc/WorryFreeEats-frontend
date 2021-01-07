/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserLoginMutationVariables = {|
  UserName?: ?string,
  UserPass?: ?string,
|};
export type UserLoginMutationResponse = {|
  +userLogin: ?{|
    +UserId: string,
    +UserName: ?string,
    +UserPass: ?string,
    +FirstName: ?string,
    +Email: ?string,
  |}
|};
export type UserLoginMutation = {|
  variables: UserLoginMutationVariables,
  response: UserLoginMutationResponse,
|};
*/


/*
mutation UserLoginMutation(
  $UserName: String
  $UserPass: String
) {
  userLogin(UserName: $UserName, UserPass: $UserPass) {
    UserId
    UserName
    UserPass
    FirstName
    Email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "UserName"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "UserPass"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "name": "userLogin",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserLoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "aea8fd4495ad61cfe9147ecbe5fb6027",
    "id": null,
    "metadata": {},
    "name": "UserLoginMutation",
    "operationKind": "mutation",
    "text": "mutation UserLoginMutation(\n  $UserName: String\n  $UserPass: String\n) {\n  userLogin(UserName: $UserName, UserPass: $UserPass) {\n    UserId\n    UserName\n    UserPass\n    FirstName\n    Email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '082a35fdc5c847183caad8c0aaed53e8';

module.exports = node;
