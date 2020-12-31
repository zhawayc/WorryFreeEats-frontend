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
  |}
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipeQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecipeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "31b3bc82e397e4151e514c04fbbe4e11",
    "id": null,
    "metadata": {},
    "name": "RecipeQuery",
    "operationKind": "query",
    "text": "query RecipeQuery(\n  $id: ID!\n) {\n  recipe(id: $id) {\n    RecipeID\n    RecipeName\n    ImageUrl\n    Ingredients {\n      IngredientId\n      Name\n      AllergyType\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '00d5f58bcac020d2168206d5c2f54cfa';

module.exports = node;
