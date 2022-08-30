/**
 * @generated SignedSource<<9ee7b429124a6d794ef84b1c5c0a2391>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type useRemoveStarMutation$variables = {
  repositoryId: string;
};
export type useRemoveStarMutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly stargazerCount: number;
      readonly viewerHasStarred: boolean;
    } | null;
  } | null;
};
export type useRemoveStarMutation = {
  response: useRemoveStarMutation$data;
  variables: useRemoveStarMutation$variables;
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
    "name": "useRemoveStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
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
    "name": "useRemoveStarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
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
    "cacheID": "37fee2a6cf2fff82b9ff8938f764561b",
    "id": null,
    "metadata": {},
    "name": "useRemoveStarMutation",
    "operationKind": "mutation",
    "text": "mutation useRemoveStarMutation(\n  $repositoryId: ID!\n) {\n  removeStar(input: {starrableId: $repositoryId}) {\n    starrable {\n      __typename\n      stargazerCount\n      viewerHasStarred\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b5e1a6f843889d8508c16d46e50a67b6";

export default node;
