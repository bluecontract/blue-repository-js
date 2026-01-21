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
