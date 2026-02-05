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
      blueId: '6KZwmcsyYNiJhn2pAfS9LAFTxTRHcDw4yzPwV3A3SSQp',
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
            "const invalid = (reason) => ({\n  changeset: [],\n  events: [{ type: 'Conversation/Proposed Change Invalid', reason }]\n});\n\nconst request = event.message.request;\n\nconst summary = request?.summary;\nif (!summary || typeof summary !== 'string') {\n  return invalid('summary is missing');\n}\n\nconst postfixValue = currentContract?.postfix || '';\nconst path = '/proposedChange' + postfixValue;\n\nif (document(path)) {\n  return invalid('proposed change already exists at ' + path);\n}\n\nreturn {\n  changeset: [{ op: 'add', path, val: request }]\n};\n",
        },
        name: 'Prepare',
        type: {
          blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
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
          blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
        },
      },
    ],
  },
  type: {
    blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
  },
} as const;
