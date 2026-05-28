export const DocumentBootstrapResponded = {
  description:
    'Generic response event for a document bootstrap request. It carries a `status` and optional `reason` so a provider can\nreport success, failure, pending state, or another coarse result without choosing a more specific completed/failed\nresponse type.\n\nUse this type when the bootstrap protocol needs a compact status response. Use Document Bootstrap Completed or Document\nBootstrap Failed when the outcome should be semantically specific and easier for workflows to match.\n',
  name: 'Document Bootstrap Responded',
  reason: {
    description: 'Details when rejected or additional context.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  status: {
    description:
      'Decision for the bootstrap request ("accepted" | "rejected").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
