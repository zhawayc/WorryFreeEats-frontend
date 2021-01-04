/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Ingredients_recipe$ref } from "./Ingredients_recipe.graphql";
import type { Recipes_query$ref } from "./Recipes_query.graphql";
export type AppQueryVariables = {|
  id: string,
  ingredientId: string,
|};
export type AppQueryResponse = {|
  +recipe: ?{|
    +$fragmentRefs: Ingredients_recipe$ref
  |},
  +ingredient: ?{|
    +id: string,
    +Name: ?string,
  |},
  +$fragmentRefs: Recipes_query$ref,
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
    ...Ingredients_recipe
    id
  }
  ...Recipes_query
  ingredient(id: $ingredientId) {
    id
    Name
  }
}

fragment Ingredients_recipe on Recipe {
  id
  Ingredients(first: 4, after: 0) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        Name
        AllergyType
        __typename
      }
      cursor
    }
  }
}

fragment Recipes_query on Query {
  recipes(first: 5, after: 0) {
    edges {
      node {
        id
        RecipeName
        ImageUrl
        ...Ingredients_recipe
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ingredientId"
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "Name",
  "storageKey": null
},
v4 = {
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
    (v2/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "after",
  "value": 0
},
v6 = [
  (v5/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": (v6/*: any*/),
  "concreteType": "IngredientConnection",
  "kind": "LinkedField",
  "name": "Ingredients",
  "plural": false,
  "selections": [
    (v7/*: any*/),
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
            (v3/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "AllergyType",
              "storageKey": null
            },
            (v8/*: any*/)
          ],
          "storageKey": null
        },
        (v9/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "Ingredients(after:0,first:4)"
},
v11 = {
  "alias": null,
  "args": (v6/*: any*/),
  "filters": ([]/*: any*/),
  "handle": "connection",
  "key": "Ingredients_Ingredients",
  "kind": "LinkedHandle",
  "name": "Ingredients"
},
v12 = [
  (v5/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipe",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Ingredients_recipe"
          }
        ],
        "storageKey": null
      },
      (v4/*: any*/),
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Recipes_query"
      }
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
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipe",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v12/*: any*/),
        "concreteType": "RecipeConnection",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "RecipeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Recipe",
                "kind": "LinkedField",
                "name": "node",
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
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": "recipes(after:0,first:5)"
      },
      {
        "alias": null,
        "args": (v12/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "Recipes_recipes",
        "kind": "LinkedHandle",
        "name": "recipes"
      },
      (v4/*: any*/)
    ]
  },
  "params": {
    "cacheID": "7d2635293eeaa2596f9f4746fae8e57a",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $id: ID!\n  $ingredientId: ID!\n) {\n  recipe(id: $id) {\n    ...Ingredients_recipe\n    id\n  }\n  ...Recipes_query\n  ingredient(id: $ingredientId) {\n    id\n    Name\n  }\n}\n\nfragment Ingredients_recipe on Recipe {\n  id\n  Ingredients(first: 4, after: 0) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        Name\n        AllergyType\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment Recipes_query on Query {\n  recipes(first: 5, after: 0) {\n    edges {\n      node {\n        id\n        RecipeName\n        ImageUrl\n        ...Ingredients_recipe\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0b69852733afb56b81a9ff8ea43acac';

module.exports = node;
