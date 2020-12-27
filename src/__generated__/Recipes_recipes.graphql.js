/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Recipes_recipes$ref: FragmentReference;
declare export opaque type Recipes_recipes$fragmentType: Recipes_recipes$ref;
export type Recipes_recipes = $ReadOnlyArray<{|
  +RecipeID: string,
  +RecipeName: ?string,
  +ImageUrl: ?string,
  +Ingredients: ?$ReadOnlyArray<?{|
    +IngredientId: string,
    +Name: ?string,
    +AllergyType: ?string,
  |}>,
  +$refType: Recipes_recipes$ref,
|}>;
export type Recipes_recipes$data = Recipes_recipes;
export type Recipes_recipes$key = $ReadOnlyArray<{
  +$data?: Recipes_recipes$data,
  +$fragmentRefs: Recipes_recipes$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Recipes_recipes",
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
  "type": "Recipe",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '45213e769fb9a5ead5b3c61be85e8aa5';

module.exports = node;
