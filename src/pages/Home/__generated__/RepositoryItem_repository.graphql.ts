/**
 * @generated SignedSource<<31634fb3b3365e2cd0366e2d77d01708>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryItem_repository$data = {
  readonly description: string | null;
  readonly id: string;
  readonly name: string;
  readonly stargazerCount: number;
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "RepositoryItem_repository";
};
export type RepositoryItem_repository$key = {
  readonly " $data"?: RepositoryItem_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryItem_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryItem_repository",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "stargazerCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "viewerHasStarred",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "950367b92288d72df960c282ea840034";

export default node;
