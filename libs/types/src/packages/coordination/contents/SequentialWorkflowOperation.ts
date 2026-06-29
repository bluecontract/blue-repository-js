export const SequentialWorkflowOperation: Record<string, unknown> = {
  description:
    "Concrete Operation handler whose implementation is an ordered Sequential Workflow. Because Operation extends Handler,\na Sequential Workflow Operation is discovered and invoked as a same-scope handler bound to its channel.\n\nA Sequential Workflow Operation is still invoked like any other Operation: callers post an Operation Request naming\nthe operation contract key; the request payload must conform to this operation's request shape; and the message must\narrive through the operation's channel. The workflow then runs the declared steps deterministically and returns effects\nsuch as triggered events or document updates through the Blue Contracts processor.\n\nUse this for document-owned behavior where the operation interface and implementation should live together in a single\ncontract entry. A plain Operation can still declare the operation interface when a runtime or document chooses to bind\nthe implementation separately.\n",
  name: 'Sequential Workflow Operation',
  steps: {
    description:
      'Append-only ordered workflow steps to run when this operation is invoked. The steps have the same semantics as steps\nin a Sequential Workflow: Compute steps compute data, Update Document steps request processor-managed patches, and\nTrigger Event steps emit Blue events. The processor remains responsible for validation, patch application, event\nrouting, deterministic ordering, gas, and post-patch type soundness.\n\nThe append-only merge policy preserves inherited workflow prefixes. Subtypes and concrete documents may append\nadditional steps, but must not replace, reorder, or positionally overlay inherited steps.\n',
    itemType: {
      blueId: '9oGn8V6FSVcJYhRfuHRShfWjiHBUqzxVi9StGtHZNfev',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  type: {
    blueId: 'wGksq5vE8TroTr6StteHDnMx9mJKqT7dHoYT9bEddym',
  },
};
