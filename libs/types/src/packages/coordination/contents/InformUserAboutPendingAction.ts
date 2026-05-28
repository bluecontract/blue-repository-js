export const InformUserAboutPendingAction = {
  channel: {
    description:
      'Contracts-map key of the channel in this scope expected to receive the follow-up that triggers the required operation.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    "Event requesting that a user or user-facing system be informed about a pending action required by the document. It is\ndesigned for workflows that need human intervention: signing, approval, authorization, input collection, consent,\npayment setup, selection, or another operation exposed by the document.\n\nThe event names the `operation` the user should run, supplies a `title` and `message` suitable for UI display, names the\n`channel` on which the follow-up is expected, and may include an `expectedRequest` shape. A UI, bank, assistant, or\nagent can use this event to render a pending-action card and later submit an Operation Request through the correct\nchannel.\n\nThis event does not force the user to act and does not mutate the document. It is a communication artifact that makes a\nworkflow's next required external action explicit and auditable.\n",
  expectedRequest: {
    description:
      'The expected request payload structure for the operation’s request.',
  },
  message: {
    description:
      'Human-readable explanation of what is needed and relevant context.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Inform User About Pending Action',
  operation: {
    description:
      'The name of the operation defined in the document that the user is required to run to fulfill the pending action.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  title: {
    description:
      'A short, user-facing title describing the required action (e.g., "Payment Setup Required", "Agreement Required").',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: '7ugyHm8fpgvQx6pbLcW8cRNLBVDBExCp2iSYgd82ak6z',
  },
} as const;
