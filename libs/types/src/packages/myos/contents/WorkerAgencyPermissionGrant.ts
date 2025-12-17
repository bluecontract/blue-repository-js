export const WorkerAgencyPermissionGrant = {
  allowedWorkerAgencyPermissions: {
    itemType: {
      blueId: '5J3RXNnALK1ZYAQBrjGwCQ4WpL3YUGHvz9WcGos6mMSp',
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
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
                'return {\n  events: [\n    {\n      type: "MyOS/Worker Agency Permission Revoke Requested",\n      reason: event.message.request\n    }\n  ]\n};\n',
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
                "const issues = [];\n\nconst unwrapText = value => {\n  if (typeof value === 'string') {\n    const trimmed = value.trim();\n    return trimmed.length > 0 ? trimmed : undefined;\n  }\n  if (value && typeof value === 'object') {\n    if (typeof value.value === 'string') {\n      const trimmed = value.value.trim();\n      return trimmed.length > 0 ? trimmed : undefined;\n    }\n    if (typeof value.workerType === 'string') {\n      const trimmed = value.workerType.trim();\n      return trimmed.length > 0 ? trimmed : undefined;\n    }\n    if (typeof value.name === 'string') {\n      const trimmed = value.name.trim();\n      return trimmed.length > 0 ? trimmed : undefined;\n    }\n  }\n  return undefined;\n};\n\nconst unwrapBoolean = value => {\n  if (typeof value === 'boolean') {\n    return value;\n  }\n  if (value && typeof value === 'object') {\n    if (typeof value.value === 'boolean') {\n      return value.value;\n    }\n    if (\n      value.value &&\n      typeof value.value === 'object' &&\n      typeof value.value.value === 'boolean'\n    ) {\n      return value.value.value;\n    }\n  }\n  return undefined;\n};\n\nconst hasBooleanValue = value => {\n  if (typeof value === 'boolean') {\n    return true;\n  }\n  if (value && typeof value === 'object') {\n    if (typeof value.value === 'boolean') {\n      return true;\n    }\n    if (\n      value.value &&\n      typeof value.value === 'object' &&\n      typeof value.value.value === 'boolean'\n    ) {\n      return true;\n    }\n  }\n  return false;\n};\n\nconst unwrapArray = value => {\n  if (Array.isArray(value)) {\n    return value;\n  }\n  if (value && typeof value === 'object' && Array.isArray(value.items)) {\n    return value.items;\n  }\n  return [];\n};\n\nconst unwrapRecord = value => {\n  if (value && typeof value === 'object' && !Array.isArray(value)) {\n    if (value.value && typeof value.value === 'object') {\n      return value.value;\n    }\n    return value;\n  }\n  return {};\n};\n\n// --- granter binding (owner account) ---\nconst granterId = document('/contracts/granterChannel/accountId');\nif (typeof granterId !== 'string' || granterId.length === 0) {\n  issues.push(\"granterChannel must be bound to an accountId\");\n}\n// --- grantee (parent worker) session id ---\nconst granteeDocumentId = document('/granteeDocumentId');\nif (\n  typeof granteeDocumentId !== 'string' ||\n  granteeDocumentId.trim().length === 0\n) {\n  issues.push(\"granteeDocumentId must be a non-empty string\");\n}\n// --- allowedWorkerAgencyPermissions : list of { workerType, permissions } ---\nconst list = document('/allowedWorkerAgencyPermissions');\nif (!Array.isArray(list) || list.length === 0) {\n  issues.push(\"allowedWorkerAgencyPermissions must be a non-empty array\");\n} else {\n  // helper: validate Single Document Permission Set\n  const validateSDPS = (p, path) => {\n    const record = unwrapRecord(p);\n    if (Object.keys(record).length === 0) {\n      issues.push(`${path} must be an object`);\n      return;\n    }\n    // read must be true to allow any access at all\n    const read = unwrapBoolean(record.read);\n    if (read !== true) {\n      issues.push(`${path}.read must be true`);\n    }\n    const share = record.share;\n    const shareValue = unwrapBoolean(share);\n    if (hasBooleanValue(share) && typeof shareValue !== 'boolean') {\n      issues.push(`${path}.share must be boolean if provided`);\n    }\n    const allOps = record.allOps;\n    const allOpsValue = unwrapBoolean(allOps);\n    if (hasBooleanValue(allOps) && typeof allOpsValue !== 'boolean') {\n      issues.push(`${path}.allOps must be boolean if provided`);\n    }\n    const singleOpsRaw = unwrapArray(record.singleOps)\n      .map(entry => unwrapText(entry))\n      .filter(Boolean);\n    const hasSingle = singleOpsRaw.length > 0;\n    if (hasSingle) {\n      const bad = singleOpsRaw.length !== unwrapArray(record.singleOps).length;\n      if (bad) issues.push(`${path}.singleOps must contain only non-empty strings`);\n    }\n    if (allOpsValue === true && hasSingle) {\n      issues.push(`${path}.allOps=true and ${path}.singleOps are mutually exclusive`);\n    }\n    // Note: it is valid to have read=true with neither allOps nor singleOps (read-only template)\n  };\n  const seenTypes = new Set();\n  list.forEach((item, idx) => {\n    const itemPath = `/allowedWorkerAgencyPermissions[${idx}]`;\n    // shape\n    if (typeof item !== 'object' || item === null) {\n      issues.push(`${itemPath} must be an object`);\n      return;\n    }\n    // workerType\n    const workerType = unwrapText(item.workerType);\n    if (!workerType) {\n      issues.push(`${itemPath}.workerType must be a non-empty string`);\n    } else {\n      if (seenTypes.has(workerType)) {\n        issues.push(`duplicate workerType '${workerType}' in allowedWorkerAgencyPermissions`);\n      } else {\n        seenTypes.add(workerType);\n      }\n    }\n    // permissions (Single Document Permission Set)\n    const perms = item.permissions;\n    if (typeof perms === 'undefined') {\n      issues.push(`${itemPath}.permissions is required`);\n    } else {\n      validateSDPS(perms, `${itemPath}.permissions`);\n    }\n  });\n}\nif (issues.length > 0) {\n  return { events: [ { type: \"Worker Agency Permission Invalid\", issues } ] };\n} else {\n  return { events: [ { type: \"Worker Agency Permission Validated\" } ] };\n}\n",
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
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'Worker Agency Permission Grant',
  type: {
    blueId: 'FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o',
  },
} as const;
