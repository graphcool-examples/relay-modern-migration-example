/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule appQuery.graphql
 * @generated SignedSource<<a08687d5d6664cd232a973440c93a954>>
 * @relayHash 80f0aa6427aefa094e2c5991cbc36681
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query appQuery {
  viewer {
    ...TodoApp_viewer
    id
  }
}

fragment TodoApp_viewer on Viewer {
  id
  allTodoes(first: 1000) {
    edges {
      node {
        id
        complete
      }
    }
  }
  ...TodoListFooter_viewer
  ...TodoList_viewer
}

fragment TodoListFooter_viewer on Viewer {
  allTodoes(first: 1000) {
    edges {
      node {
        id
        complete
      }
    }
  }
}

fragment TodoList_viewer on Viewer {
  allTodoes(first: 1000) {
    edges {
      node {
        id
        complete
        ...Todo_todo
      }
    }
  }
  ...Todo_viewer
}

fragment Todo_todo on Todo {
  complete
  id
  text
}

fragment Todo_viewer on Viewer {
  id
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "appQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "args": null,
        "concreteType": "Viewer",
        "name": "__viewer_viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TodoApp_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "appQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "appQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 1000,
                    "type": "Int"
                  }
                ],
                "concreteType": "TodoConnection",
                "name": "allTodoes",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Todo",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "complete",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "Todo",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "text",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allTodoes{\"first\":1000}"
              }
            ]
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": null,
        "handle": "viewer",
        "name": "viewer",
        "key": "",
        "filters": null
      }
    ]
  },
  "text": "query appQuery {\n  viewer {\n    ...TodoApp_viewer\n    id\n  }\n}\n\nfragment TodoApp_viewer on Viewer {\n  id\n  allTodoes(first: 1000) {\n    edges {\n      node {\n        id\n        complete\n      }\n    }\n  }\n  ...TodoListFooter_viewer\n  ...TodoList_viewer\n}\n\nfragment TodoListFooter_viewer on Viewer {\n  allTodoes(first: 1000) {\n    edges {\n      node {\n        id\n        complete\n      }\n    }\n  }\n}\n\nfragment TodoList_viewer on Viewer {\n  allTodoes(first: 1000) {\n    edges {\n      node {\n        id\n        complete\n        ...Todo_todo\n      }\n    }\n  }\n  ...Todo_viewer\n}\n\nfragment Todo_todo on Todo {\n  complete\n  id\n  text\n}\n\nfragment Todo_viewer on Viewer {\n  id\n}\n"
};

module.exports = batch;
