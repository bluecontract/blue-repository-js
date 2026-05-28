export const SequentialWorkflowOperation = {
  description:
    "Convenience handler pattern that implements a named Operation using a Sequential Workflow. The `operation` field names\nthe Operation marker in the same scope that this workflow implements. When the operation's channel delivers an\nOperation Request for that operation, this handler runs its configured steps to validate the request, compute results,\nupdate document state, and emit follow-up events.\n\nThis type ties the document's public action surface to executable workflow logic. The Operation marker explains what\nrequest shape the document accepts and which channel receives invocations; Sequential Workflow Operation supplies the\ndeterministic implementation. Keeping those pieces as Blue content lets participants inspect and hash both the API\nsurface and the implementation.\n\nThe workflow remains subject to all Blue Contracts processor rules: same-scope handler binding, dispatch snapshots,\nboundary checks, Update Document cascades, type generalization, actor/source policies, checkpoints, termination, and gas.\n",
  name: 'Sequential Workflow Operation',
  operation: {
    description:
      'The name of the Operation this handler implements. Must reference an Operation defined in the same scope.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '26w2LGCpoFHqcEpb22oJRodHCTew398PGc1WMLRevxqz',
  },
} as const;
