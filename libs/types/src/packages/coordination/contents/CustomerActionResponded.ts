export const CustomerActionResponded = {
  actionLabel: {
    description: 'Label of the action selected by the user.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'Response event returned after a customer-facing provider handled a Customer Action Requested event. It records which\naction label the customer chose, any input collected from the user, and when the provider says the response occurred.\n\n`actionLabel` should correspond to one of the requested action labels. `input` carries optional structured user input.\n`respondedAt` records provider-supplied response time. The response should be correlated to the original request using\nthe inherited Response correlation fields when available.\n\nThis event is evidence that the provider obtained a customer decision. It does not by itself prove that the action is\nauthorized under every document policy; workflows may still inspect actor, source, input, and response details before\napplying state changes.\n',
  input: {
    description: 'Optional user-provided payload for the selected action.',
  },
  name: 'Customer Action Responded',
  respondedAt: {
    description: 'Timestamp when the user decision was recorded by the bank.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  type: {
    blueId: '7aeKdDTceCVYDtyYZRdK7eQ8UU6PWn6X26Uea3XrGZdX',
  },
} as const;
