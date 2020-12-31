/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateReviewMutationVariables = {|
  ReviewId: string,
  ReviewText?: ?string,
  RecipeID?: ?string,
  Rating?: ?number,
  UserId?: ?string,
|};
export type UpdateReviewMutationResponse = {|
  +updateReview: ?{|
    +ReviewId: string,
    +ReviewText: ?string,
    +RecipeID: ?string,
    +Rating: ?number,
    +User: ?{|
      +UserId: string
    |},
  |}
|};
export type UpdateReviewMutation = {|
  variables: UpdateReviewMutationVariables,
  response: UpdateReviewMutationResponse,
|};
*/


/*
mutation UpdateReviewMutation(
  $ReviewId: ID!
  $ReviewText: String
  $RecipeID: ID
  $Rating: Int
  $UserId: ID
) {
  updateReview(ReviewId: $ReviewId, ReviewText: $ReviewText, RecipeID: $RecipeID, Rating: $Rating, UserId: $UserId) {
    ReviewId
    ReviewText
    RecipeID
    Rating
    User {
      UserId
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "Rating"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "RecipeID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ReviewId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "ReviewText"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "UserId"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "Rating",
        "variableName": "Rating"
      },
      {
        "kind": "Variable",
        "name": "RecipeID",
        "variableName": "RecipeID"
      },
      {
        "kind": "Variable",
        "name": "ReviewId",
        "variableName": "ReviewId"
      },
      {
        "kind": "Variable",
        "name": "ReviewText",
        "variableName": "ReviewText"
      },
      {
        "kind": "Variable",
        "name": "UserId",
        "variableName": "UserId"
      }
    ],
    "concreteType": "Review",
    "kind": "LinkedField",
    "name": "updateReview",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ReviewId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ReviewText",
        "storageKey": null
      },
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
        "name": "Rating",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "User",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "UserId",
            "storageKey": null
          }
        ],
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateReviewMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateReviewMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "306e1cf9ecd713474a5ccdd3900167fb",
    "id": null,
    "metadata": {},
    "name": "UpdateReviewMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateReviewMutation(\n  $ReviewId: ID!\n  $ReviewText: String\n  $RecipeID: ID\n  $Rating: Int\n  $UserId: ID\n) {\n  updateReview(ReviewId: $ReviewId, ReviewText: $ReviewText, RecipeID: $RecipeID, Rating: $Rating, UserId: $UserId) {\n    ReviewId\n    ReviewText\n    RecipeID\n    Rating\n    User {\n      UserId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '840264a38728756be74870ceecd32612';

module.exports = node;
