/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteReviewMutationVariables = {|
  id: string
|};
export type DeleteReviewMutationResponse = {|
  +deleteReview: ?number
|};
export type DeleteReviewMutation = {|
  variables: DeleteReviewMutationVariables,
  response: DeleteReviewMutationResponse,
|};
*/


/*
mutation DeleteReviewMutation(
  $id: ID!
) {
  deleteReview(id: $id)
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
    "name": "deleteReview",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteReviewMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteReviewMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b5cb037555c33bd9604644badee754a",
    "id": null,
    "metadata": {},
    "name": "DeleteReviewMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteReviewMutation(\n  $id: ID!\n) {\n  deleteReview(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3226d583f44e2493d537da439a75541';

module.exports = node;
