/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { RecommendationContainer_query$ref } from "./RecommendationContainer_query.graphql";
export type RecommendationsQueryVariables = {||};
export type RecommendationsQueryResponse = {|
  +$fragmentRefs: RecommendationContainer_query$ref
|};
export type RecommendationsQuery = {|
  variables: RecommendationsQueryVariables,
  response: RecommendationsQueryResponse,
|};
*/


/*
query RecommendationsQuery {
  ...RecommendationContainer_query
}

fragment RecommendationContainer_query on Query {
  topRecipesWithoutAllergy(allergy: "default") {
    id
    RecipeName
    ImageUrl
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecommendationsQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RecommendationContainer_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecommendationsQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "allergy",
            "value": "default"
          }
        ],
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "topRecipesWithoutAllergy",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
          }
        ],
        "storageKey": "topRecipesWithoutAllergy(allergy:\"default\")"
      }
    ]
  },
  "params": {
    "cacheID": "501fff7019e2477b561d2cbd55ddd1a2",
    "id": null,
    "metadata": {},
    "name": "RecommendationsQuery",
    "operationKind": "query",
    "text": "query RecommendationsQuery {\n  ...RecommendationContainer_query\n}\n\nfragment RecommendationContainer_query on Query {\n  topRecipesWithoutAllergy(allergy: \"default\") {\n    id\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '7feefd3f7788595d30ea9b653db117a7';

module.exports = node;
