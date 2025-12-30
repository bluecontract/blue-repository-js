export const LinkedDocumentsPermissionGrantToDocument = {
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
      description:
        'Granter indicates the grant should be revoked (MyOS Admin will handle)',
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
                'return {\n  events: [\n    {\n      type: "MyOS/Linked Documents Permission Revoke Requested",\n      reason: event.message.request\n    }\n  ]\n};\n',
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
                "const skipValidation = document('/skipValidation');\nif (skipValidation === true) return { events: [] };\n\nconst issues = [];\n\n// Required: target session\nconst target = document('/targetSessionId');\nif (!target || typeof target !== 'string') issues.push(\"targetSessionId is missing or invalid\");\n\n// Required: bound granter identity\nconst granterId = document('/contracts/granterChannel/accountId');\nif (typeof granterId !== 'string' || granterId.length === 0) issues.push(\"granterChannel must be bound to an accountId\");\n\n// Required: grantee document id\nconst gdoc = document('/granteeDocumentId');\nif (typeof gdoc !== 'string' || gdoc.trim().length === 0) issues.push(\"granteeDocumentId must be a non-empty string\");\n\n// Required: links\nconst links = document('/links');\nif (!links || typeof links !== 'object') issues.push(\"links is missing or invalid\");\n\nconst anchors = Object.keys(links).filter(key => !['description', 'type', 'keyType', 'valueType'].includes(key));\nif (anchors.length === 0) {\n  issues.push(\"links must have at least one anchor entry\");\n}\nfor (const anchor of anchors) {\n  const perms = links[anchor];\n  if (!perms || perms.read !== true) {\n    issues.push(`links['${anchor}'].read must be true`);\n  }\n  const hasSingle = Array.isArray(perms.singleOps) && perms.singleOps.length > 0;\n  if (hasSingle && perms.singleOps.some(x => typeof x !== \"string\" || x.trim().length === 0)) {\n    issues.push(`links['${anchor}'].singleOps must contain only non-empty strings`);\n  }\n  if (perms.allOps === true && hasSingle) {\n    issues.push(`links['${anchor}'].allOps=true and singleOps are mutually exclusive`);\n  }\n}\n\nif (issues.length > 0) return { events: [ { type: \"MyOS/Linked Documents Permission Invalid\", issues } ] };\nreturn { events: [ { type: \"MyOS/Linked Documents Permission Validated\" } ] };\n",
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
      "Required original document id (blueId) that will act as the 'document' principal.",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  granterDocumentSessionId: {
    description:
      "Optional. If set, MyOS should evaluate authority as this document session\n(principalType='document', granteeId=documentId of this session),\ninstead of the granter accountId.\n",
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  links: {
    description:
      'Map from anchor name to permissions that will be granted for documents linked to the base document via that anchor.',
    type: {
      blueId: '75TXyy5E7vbexVAUZcjZ2vdQaG7fJJbAHAgrh8sMtTp5',
    },
  },
  name: 'Linked Documents Permission Grant To Document',
  skipValidation: {
    description:
      "If true, the validation will be skipped (MyOS Admin won't be triggered to create permission grant)",
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  targetSessionId: {
    description:
      'Base document session id whose anchors define the scope of this grant.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  type: {
    blueId: 'FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o',
  },
} as const;
