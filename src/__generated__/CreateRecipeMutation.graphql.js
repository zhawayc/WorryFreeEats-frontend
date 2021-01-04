/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateRecipeMutationVariables = {|
  RecipeName: string,
  ImageUrl?: ?string,
|};
export type CreateRecipeMutationResponse = {|
  +addRecipe: ?{|
    +id: string,
    +RecipeName: ?string,
    +ImageUrl: ?string,
  |}
|};
export type CreateRecipeMutation = {|
  variables: CreateRecipeMutationVariables,
  response: CreateRecipeMutationResponse,
|};
*/


/*
mutation CreateRecipeMutation(
  $RecipeName: String!
  $ImageUrl: String
) {
  addRecipe(RecipeName: $RecipeName, ImageUrl: $ImageUrl) {
    id
    RecipeName
    ImageUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ImageUrl"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "RecipeName"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ImageUrl",
        "variableName": "ImageUrl"
      },
      {
        "kind": "Variable",
        "name": "RecipeName",
        "variableName": "RecipeName"
      }
    ],
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "addRecipe",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "RecipeName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ImageUrl",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateRecipeMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateRecipeMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b255acc56e392973faa0408c8422842d",
    "id": null,
    "metadata": {},
    "name": "CreateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRecipeMutation(\n  $RecipeName: String!\n  $ImageUrl: String\n) {\n  addRecipe(RecipeName: $RecipeName, ImageUrl: $ImageUrl) {\n    id\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35a6070ceffe986dbd8d996edc1bf2e1';

module.exports = node;
