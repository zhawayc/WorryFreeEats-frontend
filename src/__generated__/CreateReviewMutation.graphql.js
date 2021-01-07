/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateReviewMutationVariables = {|
  reviewText?: ?string,
  recipeID?: ?string,
  rating?: ?number,
  userId?: ?string,
|};
export type CreateReviewMutationResponse = {|
  +addReview: ?{|
    +ReviewId: string,
    +ReviewText: ?string,
    +RecipeID: ?string,
    +Rating: ?number,
    +User: ?{|
      +UserId: string,
      +UserName: ?string,
    |},
  |}
|};
export type CreateReviewMutation = {|
  variables: CreateReviewMutationVariables,
  response: CreateReviewMutationResponse,
|};
*/


/*
mutation CreateReviewMutation(
  $reviewText: String
  $recipeID: ID
  $rating: Int
  $userId: ID
) {
  addReview(ReviewText: $reviewText, RecipeID: $recipeID, Rating: $rating, UserId: $userId) {
    ReviewId
    ReviewText
    RecipeID
    Rating
    User {
      UserId
      UserName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rating"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "recipeID"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "reviewText"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "Rating",
        "variableName": "rating"
      },
      {
        "kind": "Variable",
        "name": "RecipeID",
        "variableName": "recipeID"
      },
      {
        "kind": "Variable",
        "name": "ReviewText",
        "variableName": "reviewText"
      },
      {
        "kind": "Variable",
        "name": "UserId",
        "variableName": "userId"
      }
    ],
    "concreteType": "Review",
    "kind": "LinkedField",
    "name": "addReview",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "UserName",
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
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateReviewMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateReviewMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "6f35060b11c79a180ac5851dc8cc81ab",
    "id": null,
    "metadata": {},
    "name": "CreateReviewMutation",
    "operationKind": "mutation",
    "text": "mutation CreateReviewMutation(\n  $reviewText: String\n  $recipeID: ID\n  $rating: Int\n  $userId: ID\n) {\n  addReview(ReviewText: $reviewText, RecipeID: $recipeID, Rating: $rating, UserId: $userId) {\n    ReviewId\n    ReviewText\n    RecipeID\n    Rating\n    User {\n      UserId\n      UserName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f61674ce53aae5808896fbd111337bc2';

module.exports = node;
