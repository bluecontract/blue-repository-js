export const AcceptChangeWorkflow = {
  description:
    'Applies a previously proposed change and removes its proposal state.',
  name: 'Accept Change Workflow',
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
            "const postfix = currentContract.postfix ?? ''\nconst path = '/proposedChange' + postfix\n\nconst proposedChange = document(path)\nif (proposedChange) {\n  const changeset = [...proposedChange.changeset, { op: 'remove', path }]\n  return {\n    changeset\n  }\n}\n\nreturn {\n  changeset: [],\n  events: [\n    {\n      type: \"Conversation/Proposed Change Invalid\",\n      reason: \"Proposed change does not exist at \" + path\n    }\n  ]\n};\n",
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
