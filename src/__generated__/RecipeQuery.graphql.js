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
    +RecipeID: string,
    +RecipeName: ?string,
    +ImageUrl: ?string,
    +Ingredients: ?$ReadOnlyArray<?{|
      +IngredientId: string,
      +Name: ?string,
      +AllergyType: ?string,
    |}>,
  |},
  +reviewsByRecipeId: ?$ReadOnlyArray<?{|
    +ReviewId: string,
    +ReviewText: ?string,
    +Rating: ?number,
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
    RecipeID
    RecipeName
    ImageUrl
    Ingredients {
      IngredientId
      Name
      AllergyType
    }
  }
  reviewsByRecipeId(id: $id) {
    ReviewId
    ReviewText
    Rating
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
v2 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "recipe",
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
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Ingredient",
        "kind": "LinkedField",
        "name": "Ingredients",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "IngredientId",
            "storageKey": null
          },
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
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7a979390545c479cfa41e66af5fb50ce",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery(\n  $id: ID!\n) {\n  recipe(id: $id) {\n    RecipeID\n    RecipeName\n    ImageUrl\n    Ingredients {\n      IngredientId\n      Name\n      AllergyType\n    }\n  }\n  reviewsByRecipeId(id: $id) {\n    ReviewId\n    ReviewText\n    Rating\n    User {\n      UserId\n      UserName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '317036315f8cb12960bc35f901a785f6';

module.exports = node;
