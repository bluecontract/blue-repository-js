export const SingleDocumentPermissionGrantToAccount = {
  "name": "Single Document Permission Grant To Account",
  "type": {
    "blueId": "FHzfgUb3eTqBkgDi1n5QNw5PC1QYGycEVs1c3YSrZ53o"
  },
  "targetSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Target document session id to grant access to"
  },
  "granterDocumentSessionId": {
    "type": {
      "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
    },
    "description": "Optional. If set, MyOS should evaluate authority using this document session as the principal (instead of granter accountId)."
  },
  "permissions": {
    "type": {
      "blueId": "DRDQcve5AjwBK9z6Njfa4MNERko7Uf4ucvARFdC6sL54"
    },
    "description": "Rights to grant on the target session (READ required; allOps and singleOps are mutually exclusive; singleOps is optional but must be non-empty if provided)."
  },
  "contracts": {
    "granterChannel": {
      "type": {
        "blueId": "HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs"
      },
      "description": "Granter/owner’s timeline (actor allowed to request revoke)"
    },
    "granteeChannel": {
      "type": {
        "blueId": "HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs"
      },
      "description": "Grantee’s timeline (recipient of the rights)"
    },
    "initLifecycleChannel": {
      "type": {
        "blueId": "H2aCCTUcLMTJozWkn7HPUjyFBFxamraw1q8DyWk87zxr"
      },
      "event": {
        "type": {
          "blueId": "BrpmpNt5JkapeUvPqYcxgXZrHNZX3R757dRwuXXdfNM2"
        }
      }
    },
    "revoke": {
      "type": {
        "blueId": "BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC"
      },
      "description": "Granter or grantee indicates the grant should be revoked (MyOS Admin will handle)",
      "channel": {
        "value": "granterChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "request": {
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        },
        "description": "Optional human-readable reason"
      }
    },
    "revokeImplGranter": {
      "type": {
        "blueId": "CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv"
      },
      "operation": {
        "value": "revoke",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "steps": {
        "items": [
          {
            "name": "EmitRevokeRequested",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "return {\n  events: [\n    {\n      type: \"MyOS/Single Document Permission Revoke Requested\",\n      reason: event.message.request\n    }\n  ]\n};\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          }
        ]
      }
    },
    "validateOnInit": {
      "type": {
        "blueId": "7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe"
      },
      "channel": {
        "value": "initLifecycleChannel",
        "type": {
          "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
        }
      },
      "steps": {
        "items": [
          {
            "name": "ValidateBasicShape",
            "type": {
              "blueId": "3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK"
            },
            "code": {
              "value": "const issues = [];\n\n// Required: target session\nconst target = document('/targetSessionId');\nif (!target || typeof target !== 'string') issues.push(\"targetSessionId is missing or invalid\");\n\n// Required: bound identities\nconst granterId = document('/contracts/granterChannel/accountId');\nif (typeof granterId !== 'string' || granterId.length === 0) issues.push(\"granterChannel must be bound to an accountId\");\nconst granteeId = document('/contracts/granteeChannel/accountId');\nif (typeof granteeId !== 'string' || granteeId.length === 0) issues.push(\"granteeChannel must be bound to an accountId\");\n\n// Permissions\nconst perms = document('/permissions');\nif (!perms || typeof perms !== 'object') {\n  issues.push(\"permissions block is missing\");\n} else {\n  if (perms.read !== true) issues.push(\"permissions.read must be true for SDPG\");\n  const hasSingle = Array.isArray(perms?.singleOps) && perms.singleOps.length > 0;\n  if (hasSingle) {\n    if (perms.singleOps.some(x => typeof x !== 'string' || x.trim().length === 0)) {\n      issues.push(\"permissions.singleOps must contain only non-empty strings\");\n    }\n  }\n  if (perms.allOps === true && hasSingle) {\n    issues.push(\"permissions.allOps=true and permissions.singleOps are mutually exclusive\");\n  }\n}\n\nif (issues.length > 0) return { events: [ { type: \"Single Document Permission Invalid\", issues } ] };\nreturn { events: [ { type: \"Single Document Permission Validated\" } ] };\n",
              "type": {
                "blueId": "DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K"
              }
            }
          }
        ]
      }
    }
  }
} as const;
