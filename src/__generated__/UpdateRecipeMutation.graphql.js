/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateRecipeMutationVariables = {|
  id: string,
  RecipeName?: ?string,
  ImageUrl?: ?string,
|};
export type UpdateRecipeMutationResponse = {|
  +updateRecipe: ?{|
    +id: string,
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
  $id: ID!
  $RecipeName: String
  $ImageUrl: String
) {
  updateRecipe(id: $id, RecipeName: $RecipeName, ImageUrl: $ImageUrl) {
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
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
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
        "name": "RecipeName",
        "variableName": "RecipeName"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
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
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateRecipeMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "209e3f5940b896c1a6f99564daaa3e55",
    "id": null,
    "metadata": {},
    "name": "UpdateRecipeMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRecipeMutation(\n  $id: ID!\n  $RecipeName: String\n  $ImageUrl: String\n) {\n  updateRecipe(id: $id, RecipeName: $RecipeName, ImageUrl: $ImageUrl) {\n    id\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10552d72d6539cc12b67c2cc619ccd83';

module.exports = node;
