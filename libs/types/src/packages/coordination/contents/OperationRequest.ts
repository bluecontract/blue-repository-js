export const OperationRequest = {
  allowNewerVersion: {
    description:
      'Controls concurrent modification handling. When true, processes the operation on the latest document version even if it changed. When false, only processes if the document still has the same blueId as specified.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  description:
    'Coordination type `Operation Request`. This type is identity-bearing Blue content in the coordination package. It defines the\nsemantic role named by its `name` field and, when used as a contract/event/marker/source/status specialization,\nshould be interpreted according to its declared parent type `none` and its field definitions. The\ndescription is intentionally part of the type identity: changing it changes what this type claims to mean.\n\nA reader should treat this type as a precise domain term, not a loose label. Concrete processors, workflows, and\nuser interfaces should use the type BlueId and the fields declared on this node to decide compatibility, routing,\ndisplay, and audit behavior. If a document needs different semantics, it should define a different type rather\nthan reuse this one with incompatible meaning.\n',
  document: {
    description:
      'Specifies the target document for the operation, typically containing the blueId of the document to operate on.',
  },
  name: 'Operation Request',
  operation: {
    description:
      'The name of the operation to invoke (must exist on the target).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  request: {
    description:
      'Payload for the operation. Shape MUST match the target Operation’s `request` contract (scalars or structured nodes).\n',
  },
} as const;
