/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRecipeMutationVariables = {|
  id: string
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
  $id: ID!
) {
  deleteRecipe(id: $id)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
    "cacheID": "6ea8b3216b34b56aa257c6f264d082ae",
    "id": null,
    "metadata": {},
    "name": "DeleteRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRecipeMutation(\n  $id: ID!\n) {\n  deleteRecipe(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3367af1ecfc27ab5e5be5858d6c5333';

module.exports = node;
