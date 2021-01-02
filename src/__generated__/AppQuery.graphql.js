/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { Recipes_query$ref } from "./Recipes_query.graphql";
export type AppQueryVariables = {|
  id: string,
  ingredientId: string,
|};
export type AppQueryResponse = {|
  +recipe: ?{|
    +RecipeID: string,
    +RecipeName: ?string,
  |},
  +ingredient: ?{|
    +IngredientId: string,
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
    RecipeID
    RecipeName
  }
  ...Recipes_query
  ingredient(id: $ingredientId) {
    IngredientId
    Name
  }
}

fragment Recipes_query on Query {
  recipes(first: 10, after: 2) {
    edges {
      node {
        RecipeID
        RecipeName
        ImageUrl
        Ingredients {
          IngredientId
          Name
          AllergyType
        }
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
},
v7 = [
  {
    "kind": "Literal",
    "name": "after",
    "value": 2
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      (v3/*: any*/),
      (v6/*: any*/),
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
      (v3/*: any*/),
      {
        "alias": null,
        "args": (v7/*: any*/),
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
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
          }
        ],
        "storageKey": "recipes(after:2,first:10)"
      },
      {
        "alias": null,
        "args": (v7/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "Recipes_recipes",
        "kind": "LinkedHandle",
        "name": "recipes"
      },
      (v6/*: any*/)
    ]
  },
  "params": {
    "cacheID": "07fa694b6a440360b92f9bb64979d526",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $id: ID!\n  $ingredientId: ID!\n) {\n  recipe(id: $id) {\n    RecipeID\n    RecipeName\n  }\n  ...Recipes_query\n  ingredient(id: $ingredientId) {\n    IngredientId\n    Name\n  }\n}\n\nfragment Recipes_query on Query {\n  recipes(first: 10, after: 2) {\n    edges {\n      node {\n        RecipeID\n        RecipeName\n        ImageUrl\n        Ingredients {\n          IngredientId\n          Name\n          AllergyType\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4c411ba6f597c75c8faa258b1b2c9cae';

module.exports = node;
