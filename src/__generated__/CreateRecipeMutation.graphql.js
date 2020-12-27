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
    +RecipeID: string,
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
    RecipeID
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
        "name": "RecipeID",
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
    "cacheID": "96c2ab2f48157ae372de5afd2ec5f6c7",
    "id": null,
    "metadata": {},
    "name": "CreateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRecipeMutation(\n  $RecipeName: String!\n  $ImageUrl: String\n) {\n  addRecipe(RecipeName: $RecipeName, ImageUrl: $ImageUrl) {\n    RecipeID\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cb6a0a8d8d48ab59172ea8f26dae641';

module.exports = node;
