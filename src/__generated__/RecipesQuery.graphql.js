/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Recipes_query$ref } from "./Recipes_query.graphql";
export type RecipesQueryVariables = {|
  count?: ?number,
  cursor?: ?string,
|};
export type RecipesQueryResponse = {|
  +$fragmentRefs: Recipes_query$ref
|};
export type RecipesQuery = {|
  variables: RecipesQueryVariables,
  response: RecipesQueryResponse,
|};
*/


/*
query RecipesQuery(
  $count: Int
  $cursor: ID
) {
  ...Recipes_query_1G22uz
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

fragment Recipes_query_1G22uz on Query {
  recipes(first: $count, after: $cursor) {
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
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
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
    "kind": "Literal",
    "name": "after",
    "value": 0
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v4 = {
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
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipesQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
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
    "name": "RecipesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "IngredientConnection",
                    "kind": "LinkedField",
                    "name": "Ingredients",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "Ingredients(after:0,first:4)"
                  },
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "Ingredients_Ingredients",
                    "kind": "LinkedHandle",
                    "name": "Ingredients"
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "Recipes_recipes",
        "kind": "LinkedHandle",
        "name": "recipes"
      }
    ]
  },
  "params": {
    "cacheID": "0bc8ae8666b17e438dbd2263c4c6b386",
    "id": null,
    "metadata": {},
    "name": "RecipesQuery",
    "operationKind": "query",
    "text": "query RecipesQuery(\n  $count: Int\n  $cursor: ID\n) {\n  ...Recipes_query_1G22uz\n}\n\nfragment Ingredients_recipe on Recipe {\n  id\n  Ingredients(first: 4, after: 0) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      node {\n        id\n        Name\n        AllergyType\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment Recipes_query_1G22uz on Query {\n  recipes(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        RecipeName\n        ImageUrl\n        ...Ingredients_recipe\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd4423c0a3c1c2d705803705cf8ce6658';

module.exports = node;
