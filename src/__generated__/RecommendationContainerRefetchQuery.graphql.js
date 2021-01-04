/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { RecommendationContainer_query$ref } from "./RecommendationContainer_query.graphql";
export type RecommendationContainerRefetchQueryVariables = {|
  allergy?: ?string
|};
export type RecommendationContainerRefetchQueryResponse = {|
  +$fragmentRefs: RecommendationContainer_query$ref
|};
export type RecommendationContainerRefetchQuery = {|
  variables: RecommendationContainerRefetchQueryVariables,
  response: RecommendationContainerRefetchQueryResponse,
|};
*/


/*
query RecommendationContainerRefetchQuery(
  $allergy: String
) {
  ...RecommendationContainer_query_zMsyR
}

fragment RecommendationContainer_query_zMsyR on Query {
  topRecipesWithoutAllergy(allergy: $allergy) {
    id
    RecipeName
    ImageUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "allergy"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "allergy",
    "variableName": "allergy"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RecommendationContainerRefetchQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "RecommendationContainer_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RecommendationContainerRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23be42967c982c2cf7fa26a593cd9b3a",
    "id": null,
    "metadata": {},
    "name": "RecommendationContainerRefetchQuery",
    "operationKind": "query",
    "text": "query RecommendationContainerRefetchQuery(\n  $allergy: String\n) {\n  ...RecommendationContainer_query_zMsyR\n}\n\nfragment RecommendationContainer_query_zMsyR on Query {\n  topRecipesWithoutAllergy(allergy: $allergy) {\n    id\n    RecipeName\n    ImageUrl\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c92e01aaa40ba9ef789a06d8158b7ab7';

module.exports = node;
