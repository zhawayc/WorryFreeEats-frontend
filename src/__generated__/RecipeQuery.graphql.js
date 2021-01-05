/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RecipeQueryVariables = {|
  id: string
|};
export type RecipeQueryResponse = {|
  +recipe: ?{|
    +id: string,
    +RecipeName: ?string,
    +ImageUrl: ?string,
    +Ingredients: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +Name: ?string,
          +AllergyType: ?string,
        |}
      |}>
    |},
  |},
  +reviewsByRecipeId: ?$ReadOnlyArray<?{|
    +ReviewId: string,
    +ReviewText: ?string,
    +Rating: ?number,
    +RecipeID: ?string,
    +User: ?{|
      +UserId: string,
      +UserName: ?string,
    |},
  |}>,
|};
export type RecipeQuery = {|
  variables: RecipeQueryVariables,
  response: RecipeQueryResponse,
|};
*/


/*
query RecipeQuery(
  $id: ID!
) {
  recipe(id: $id) {
    id
    RecipeName
    ImageUrl
    Ingredients(first: 10, after: 0) {
      edges {
        node {
          id
          Name
          AllergyType
        }
      }
    }
  }
  reviewsByRecipeId(id: $id) {
    ReviewId
    ReviewText
    Rating
    RecipeID
    User {
      UserId
      UserName
    }
  }
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
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "recipe",
    "plural": false,
    "selections": [
      (v2/*: any*/),
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
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "after",
            "value": 0
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          }
        ],
        "concreteType": "IngredientConnection",
        "kind": "LinkedField",
        "name": "Ingredients",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "IngredientEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ingredient",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "Name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "AllergyType",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "Ingredients(after:0,first:10)"
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Review",
    "kind": "LinkedField",
    "name": "reviewsByRecipeId",
    "plural": true,
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
        "name": "Rating",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": (v3/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8345290d1c86a4be91620aff6e72ff38",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery(\n  $id: ID!\n) {\n  recipe(id: $id) {\n    id\n    RecipeName\n    ImageUrl\n    Ingredients(first: 10, after: 0) {\n      edges {\n        node {\n          id\n          Name\n          AllergyType\n        }\n      }\n    }\n  }\n  reviewsByRecipeId(id: $id) {\n    ReviewId\n    ReviewText\n    Rating\n    RecipeID\n    User {\n      UserId\n      UserName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c414e5b3f0e09bbaef0b592c21c42359';

module.exports = node;
