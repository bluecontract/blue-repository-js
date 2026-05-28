export const DocumentBootstrapFailed = {
  description:
    'Response event indicating that a requested document bootstrap failed. The `reason` field explains why the provider\ncould not create or prepare the document, such as invalid input, missing channel binding, unsupported participant,\nauthorization failure, or provider error.\n\nThis event is a domain-level failure response. It does not necessarily imply a processor fatal error in the requesting\ndocument. Workflows can use it to notify users, retry, store failure state, or select an alternate provider.\n',
  name: 'Document Bootstrap Failed',
  reason: {
    description: 'Failure reason.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
