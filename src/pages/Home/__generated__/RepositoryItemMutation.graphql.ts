/**
 * @generated SignedSource<<694bbe5869b483ca5bf85b351e303ed4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RepositoryItemMutation$variables = {
  repositoryId: string;
};
export type RepositoryItemMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly stargazerCount: number;
      readonly viewerHasStarred: boolean;
    } | null;
  } | null;
};
export type RepositoryItemMutation = {
  response: RepositoryItemMutation$data;
  variables: RepositoryItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "repositoryId"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "starrableId",
        "variableName": "repositoryId"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "viewerHasStarred",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d2020af3f83fbf437f31e6883a9b6311",
    "id": null,
    "metadata": {},
    "name": "RepositoryItemMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryItemMutation(\n  $repositoryId: ID!\n) {\n  addStar(input: {starrableId: $repositoryId}) {\n    starrable {\n      __typename\n      stargazerCount\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7aeb20d5769175a047a066da7f9a4b07";

export default node;
