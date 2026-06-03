export const SequentialWorkflowOperation: Record<string, unknown> = {
  description:
    'Operation contract whose implementation is a Sequential Workflow. It connects a named operation request to a workflow\nhandler: when the configured channel accepts an event for the operation, the workflow steps run deterministically and\nproduce processor effects.\n\nThis type is useful for common document-owned behavior such as submitting a request, validating inputs, building a\nchangeset with Compute, applying it with Update Document, and emitting follow-up events. It keeps operation logic in\nBlue content so the operation can be inspected, versioned, hashed, and transported with the document.\n',
  name: 'Sequential Workflow Operation',
  operation: {
    description:
      'Operation metadata for this workflow operation, including request shape and channel binding. Concrete runtimes may\ninline this or reference a same-scope Operation contract.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: 'MyaXwTXty7ZujV89fT5STJvXpEr1W59puqdK2XM9ALv',
  },
};
