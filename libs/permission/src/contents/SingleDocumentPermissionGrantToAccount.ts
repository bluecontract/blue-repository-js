export const singleDocumentPermissionGrantToAccount = {
  name: 'Single Document Permission Grant To Account',
  type: {
    blueId: '9NExoTity2JU7poKAYairyjHsxDSH5jv5XyokoFE4VR2',
  },
  granterDocumentSessionId: {
    description:
      'Optional. If set, MyOS should evaluate authority using this document session as the principal (instead of granter accountId).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  contracts: {
    granterChannel: {
      description: 'Granter/owner’s timeline (actor allowed to request revoke)',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    revokeImplGranter: {
      type: {
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'revoke',
      },
      steps: {
        items: [
          {
            name: 'EmitRevokeRequested',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'return {\n  events: [\n    {\n      type: "Single Document Permission Revoke Requested",\n      reason: event.message.request\n    }\n  ]\n};\n',
            },
          },
        ],
      },
    },
    initLifecycleChannel: {
      type: {
        blueId: '8XrM27vz8BEC7vDT6Yn41fRwucLeLFXsvqLt7JCvkG4c',
      },
      event: {
        type: {
          blueId: '75eYxjwaABUcTCuKCeg1Pf1jjwDarLnFLXtxERehWFCv',
        },
      },
    },
    revoke: {
      description:
        'Granter or grantee indicates the grant should be revoked (MyOS Admin will handle)',
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'granterChannel',
      },
      request: {
        description: 'Optional human-readable reason',
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
      },
    },
    granteeChannel: {
      description: 'Grantee’s timeline (recipient of the rights)',
      type: {
        blueId: 'Bx3dgXf5uFkGf9KxkUTFWQhbEw9QBc9cTgz1KP1Qtgh6',
      },
    },
    validateOnInit: {
      type: {
        blueId: 'rjhSMnLxw45PaS3KLfjKgS2JoosfX4QYTHpWGwzpY4Y',
      },
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            name: 'ValidateBasicShape',
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'const issues = [];\n\n// Required: target session\nconst target = document(\'/targetSessionId\');\nif (!target || typeof target !== \'string\') issues.push("targetSessionId is missing or invalid");\n\n// Required: bound identities\nconst granterId = document(\'/granterChannel/accountId\');\nif (typeof granterId !== \'string\' || granterId.length === 0) issues.push("granterChannel must be bound to an accountId");\nconst granteeId = document(\'/granteeChannel/accountId\');\nif (typeof granteeId !== \'string\' || granteeId.length === 0) issues.push("granteeChannel must be bound to an accountId");\n\n// Permissions\nconst perms = document(\'/permissions\');\nif (!perms || typeof perms !== \'object\') {\n  issues.push("permissions block is missing");\n} else {\n  if (perms.read !== true) issues.push("permissions.read must be true for SDPG");\n  const hasSingle = Object.prototype.hasOwnProperty.call(perms, \'singleOps\');\n  const isList = Array.isArray(perms?.singleOps);\n  if (hasSingle) {\n    if (!isList || perms.singleOps.length === 0) {\n      issues.push("permissions.singleOps must be a non-empty list when provided");\n    } else if (perms.singleOps.some(x => typeof x !== \'string\' || x.trim().length === 0)) {\n      issues.push("permissions.singleOps must contain only non-empty strings");\n    }\n  }\n  if (perms.allOps === true && hasSingle) {\n    issues.push("permissions.allOps=true and permissions.singleOps are mutually exclusive");\n  }\n}\n\nif (issues.length > 0) return { events: [ { type: "Single Document Permission Invalid", issues } ] };\nreturn { events: [ { type: "Single Document Permission Validated" } ] };\n',
            },
          },
        ],
      },
    },
  },
  targetSessionId: {
    description: 'Target document session id to grant access to',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  permissions: {
    description:
      'Rights to grant on the target session (READ required; allOps and singleOps are mutually exclusive; singleOps is optional but must be non-empty if provided).',
    type: {
      blueId: '7TCdQstz98WJ8RXqizemdpdg723HeqTZHHiRXCnso7b4',
    },
  },
} as const;
