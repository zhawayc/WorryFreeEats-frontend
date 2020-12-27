/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Recipes_recipes$ref } from "./Recipes_recipes.graphql";
export type AppQueryVariables = {|
  id: string,
  ingredientId: string,
|};
export type AppQueryResponse = {|
  +recipe: ?{|
    +RecipeID: string,
    +RecipeName: ?string,
  |},
  +recipes: ?$ReadOnlyArray<?{|
    +$fragmentRefs: Recipes_recipes$ref
  |}>,
  +ingredient: ?{|
    +IngredientId: string,
    +Name: ?string,
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $id: ID!
  $ingredientId: ID!
) {
  recipe(id: $id) {
    RecipeID
    RecipeName
  }
  recipes {
    ...Recipes_recipes
  }
  ingredient(id: $ingredientId) {
    IngredientId
    Name
  }
}

fragment Recipes_recipes on Recipe {
  RecipeID
  RecipeName
  ImageUrl
  Ingredients {
    IngredientId
    Name
    AllergyType
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ingredientId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "RecipeID",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "RecipeName",
  "storageKey": null
},
v3 = {
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
    (v1/*: any*/),
    (v2/*: any*/)
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "IngredientId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "Name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Variable",
      "name": "id",
      "variableName": "ingredientId"
    }
  ],
  "concreteType": "Ingredient",
  "kind": "LinkedField",
  "name": "ingredient",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Recipes_recipes"
          }
        ],
        "storageKey": null
      },
      (v6/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
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
              (v4/*: any*/),
              (v5/*: any*/),
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
      (v6/*: any*/)
    ]
  },
  "params": {
    "cacheID": "16f20d3f92a1268194d6a62b9e4ec5f3",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $id: ID!\n  $ingredientId: ID!\n) {\n  recipe(id: $id) {\n    RecipeID\n    RecipeName\n  }\n  recipes {\n    ...Recipes_recipes\n  }\n  ingredient(id: $ingredientId) {\n    IngredientId\n    Name\n  }\n}\n\nfragment Recipes_recipes on Recipe {\n  RecipeID\n  RecipeName\n  ImageUrl\n  Ingredients {\n    IngredientId\n    Name\n    AllergyType\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '102cc867a768548007e6418ff76f69e7';

module.exports = node;
