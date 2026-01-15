export const ProposeChangeWorkflow = {
  description: 'Stores a proposed change under /proposedChange{postfix}.',
  name: 'Propose Change Workflow',
  postfix: {
    description:
      'Optional postfix used while building proposed change state key.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
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
            "const issues = [];\n\nconst request = event.message.request || {};\n\nconst proposedChangesetDescription = request.changesetDescription;\nconst proposedChangeset = request.changeset;\n\nif (!proposedChangesetDescription) {\n  issues.push('changesetDescription is missing');\n}\n\nif (!proposedChangeset) {\n  issues.push('changeset is missing');\n}\n\nif (issues.length > 0) {\n  return {\n    changeset: [],\n    events: [\n      {\n        type: \"Conversation/Proposed Change Invalid\",\n        reason: issues.join('; ')\n      }\n    ]\n  }\n}\n\nconst postfix = currentContract.postfix ?? ''\nconst path = '/proposedChange' + postfix\n\nconst existing = document(path)\nif (existing) {\n  return {\n    changeset: [],\n    events: [\n      {\n        type: \"Conversation/Proposed Change Invalid\",\n        reason: \"Can not propose change when it already exists at \" + path\n      }\n    ]\n  }\n}\n\nreturn {\n  changeset: [{\n    op: 'add',\n    path,\n    val: {\n      changesetDescription: proposedChangesetDescription,\n      changeset: proposedChangeset\n    }\n  }]\n};\n",
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
