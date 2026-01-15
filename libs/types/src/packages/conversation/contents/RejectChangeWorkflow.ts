export const RejectChangeWorkflow = {
  description:
    'Discards a previously proposed change by removing its proposal state.',
  name: 'Reject Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  steps: {
    items: [
      {
        code: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value:
            "const postfix = currentContract.postfix ?? ''\nconst path = '/proposedChange' + postfix\n\nconst proposedChange = document(path)\nif (proposedChange) {\n  return {\n    changeset: [{ op: 'remove', path }]\n  }\n}\n\nreturn {\n  changeset: [],\n  events: [\n    {\n      type: \"Conversation/Proposed Change Invalid\",\n      reason: \"Proposed change does not exist at \" + path\n    }\n  ]\n};\n",
        },
        name: 'Prepare',
        type: {
          blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
        },
      },
      {
        changeset: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
          value: '${steps.Prepare.changeset}',
        },
        name: 'Apply',
        type: {
          blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
        },
      },
    ],
  },
  type: {
    blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
  },
} as const;
