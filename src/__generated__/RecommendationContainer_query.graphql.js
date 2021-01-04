/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RecommendationContainer_query$ref: FragmentReference;
declare export opaque type RecommendationContainer_query$fragmentType: RecommendationContainer_query$ref;
export type RecommendationContainer_query = {|
  +topRecipesWithoutAllergy: ?$ReadOnlyArray<?{|
    +id: string,
    +RecipeName: ?string,
    +ImageUrl: ?string,
  |}>,
  +$refType: RecommendationContainer_query$ref,
|};
export type RecommendationContainer_query$data = RecommendationContainer_query;
export type RecommendationContainer_query$key = {
  +$data?: RecommendationContainer_query$data,
  +$fragmentRefs: RecommendationContainer_query$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": "default",
      "kind": "LocalArgument",
      "name": "allergy"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecommendationContainer_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "allergy",
          "variableName": "allergy"
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'f0f8c801fac11cf0d291a24b4880393c';

module.exports = node;
