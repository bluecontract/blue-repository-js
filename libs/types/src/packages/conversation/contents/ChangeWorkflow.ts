export const ChangeWorkflow = {
  description: 'Applies a requested changeset immediately to the document.',
  name: 'Change Workflow',
  request: {
    description: 'Expected request payload for this workflow.',
    type: {
      blueId: 'Dfdxevr94oumtBfXyFBhx9tawqcFESioqmJxhVJBL5M5',
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
            "const issues = [];\n\nconst request = event.message.request || {};\n\nconst changeset = request.changeset;\nif (!changeset) {\n  issues.push('changeset is missing');\n}\n\nif (issues.length > 0) {\n  return {\n    changeset: [],\n    events: [\n      {\n        type: \"Conversation/Event\",\n        reason: issues.join('; ')\n      }\n    ]\n  }\n}\n\nreturn {\n  changeset\n};\n",
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
