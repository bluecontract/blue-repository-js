export const SingleDocumentPermissionGrantToDocument = {
  contracts: {
    granterChannel: {
      description: 'Granter/owner’s timeline (actor allowed to request revoke)',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    initLifecycleChannel: {
      event: {
        type: {
          blueId: 'BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2',
        },
      },
      type: {
        blueId: 'H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr',
      },
    },
    revoke: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'granterChannel',
      },
      description: 'Granter requests revocation (handled by MyOS Admin)',
      request: {
        description: 'Optional human-readable reason',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    revokeImplGranter: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'revoke',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'return {\n  events: [\n    {\n      type: "MyOS/Single Document Permission Revoke Requested",\n      reason: event.message.request\n    }\n  ]\n};\n',
            },
            name: 'EmitRevokeRequested',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    validateOnInit: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const skipValidation = document('/skipValidation');\nif (skipValidation === true) return { events: [] };\n\nconst issues = [];\n\n// Required: target session\nconst target = document('/targetSessionId');\nif (!target || typeof target !== 'string') issues.push(\"targetSessionId is missing or invalid\");\n\n// Required: bound granter identity\nconst granterId = document('/contracts/granterChannel/accountId');\nif (typeof granterId !== 'string' || granterId.length === 0) issues.push(\"granterChannel must be bound to an accountId\");\n\n// Required: grantee document id\nconst gdoc = document('/granteeDocumentId');\nif (typeof gdoc !== 'string' || gdoc.trim().length === 0) issues.push(\"granteeDocumentId must be a non-empty string (originalBlueId)\");\n\n// Permissions\nconst perms = document('/permissions');\nif (!perms || typeof perms !== 'object') {\n  issues.push(\"permissions block is missing\");\n} else {\n  if (perms.read !== true) issues.push(\"permissions.read must be true for SDPG\");\n  const hasSingle = Array.isArray(perms?.singleOps) && perms.singleOps.length > 0;\n  if (hasSingle) {\n    if (perms.singleOps.some(x => typeof x !== 'string' || x.trim().length === 0)) {\n      issues.push(\"permissions.singleOps must contain only non-empty strings\");\n    }\n  }\n  if (perms.allOps === true && hasSingle) {\n    issues.push(\"permissions.allOps=true and permissions.singleOps are mutually exclusive\");\n  }\n}\n\nif (issues.length > 0) return { events: [ { type: \"Single Document Permission Invalid\", issues } ] };\nreturn { events: [ { type: \"Single Document Permission Validated\" } ] };\n",
            },
            name: 'ValidateBasicShape',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
      },
    },
  },
  granteeDocumentId: {
    description:
      "Required original document id (blueId) that will act as the grantee principal ('document')",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterDocumentSessionId: {
    description:
      'Optional. If set, MyOS should evaluate authority using this document session as the principal (instead of granter accountId).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Single Document Permission Grant To Document',
  permissions: {
    description:
      'Rights to grant on the target session (READ required; allOps and singleOps are mutually exclusive; singleOps is optional but must be non-empty if provided).',
    type: {
      blueId: 'DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54',
    },
  },
  skipValidation: {
    description:
      "If true, the validation will be skipped (MyOS Admin won't be triggered to create permission grant)",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  targetSessionId: {
    description: 'Target document session id to grant access to',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o',
  },
} as const;
