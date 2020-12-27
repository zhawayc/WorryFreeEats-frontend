/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateRecipeMutationVariables = {|
  RecipeID: string,
  RecipeName?: ?string,
  ImageUrl?: ?string,
|};
export type UpdateRecipeMutationResponse = {|
  +updateRecipe: ?{|
    +RecipeID: string,
    +RecipeName: ?string,
    +ImageUrl: ?string,
  |}
|};
export type UpdateRecipeMutation = {|
  variables: UpdateRecipeMutationVariables,
  response: UpdateRecipeMutationResponse,
|};
*/


/*
mutation UpdateRecipeMutation(
  $RecipeID: ID!
  $RecipeName: String
  $ImageUrl: String
) {
  updateRecipe(RecipeID: $RecipeID, RecipeName: $RecipeName, ImageUrl: $ImageUrl) {
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
  "name": "RecipeID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "RecipeName"
},
v3 = [
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
        "name": "RecipeID",
        "variableName": "RecipeID"
      },
      {
        "kind": "Variable",
        "name": "RecipeName",
        "variableName": "RecipeName"
      }
    ],
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "updateRecipe",
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateRecipeMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateRecipeMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "150f0238b4b9b66d9202d6762959925e",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeMutation(\n  $RecipeID: ID!\n  $RecipeName: String\n  $ImageUrl: String\n) {\n  updateRecipe(RecipeID: $RecipeID, RecipeName: $RecipeName, ImageUrl: $ImageUrl) {\n    RecipeID\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd859f7cbb767121ae72aaaddd3c305c';

module.exports = node;
