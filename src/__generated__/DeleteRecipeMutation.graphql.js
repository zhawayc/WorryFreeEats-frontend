/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRecipeMutationVariables = {|
  RecipeID: string
|};
export type DeleteRecipeMutationResponse = {|
  +deleteRecipe: ?number
|};
export type DeleteRecipeMutation = {|
  variables: DeleteRecipeMutationVariables,
  response: DeleteRecipeMutationResponse,
|};
*/


/*
mutation DeleteRecipeMutation(
  $RecipeID: ID!
) {
  deleteRecipe(RecipeID: $RecipeID)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "RecipeID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "RecipeID",
        "variableName": "RecipeID"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteRecipe",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteRecipeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRecipeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "16151b3fdc0da145393d1e0a57eaba89",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeMutation(\n  $RecipeID: ID!\n) {\n  deleteRecipe(RecipeID: $RecipeID)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd7035b7abd0750ce1def8421c443d09';

module.exports = node;
