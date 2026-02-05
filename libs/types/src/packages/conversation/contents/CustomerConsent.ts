export const CustomerConsent = {
  consentDetails: {
    description:
      'Generic scope details (merchant id, event categories, requesting contract refs, etc.).',
    keyType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    type: {
      blueId: 'G7fBT9PSod1RfHLHkpafAGBDVAJMrMhAMY51ERcyXNrj',
    },
    valueType: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  consentKind: {
    description:
      'Classification of the consent (e.g., cardTransactionMonitoring).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  consentStatus: {
    description: 'Consent state (granted, revoked).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'granted',
  },
  contracts: {
    granteeChannel: {
      description: 'Grantee (e.g., merchant MyOS timeline).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    granterChannel: {
      description:
        'Granter (customer represented by the bank; customer has no MyOS account).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    guarantorChannel: {
      description: 'Bank/admin channel.',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    initialize: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'initLifecycleChannel',
      },
      steps: {
        items: [
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/consentStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'granted',
                  },
                },
              ],
            },
            name: 'Initialize',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
        ],
      },
      type: {
        blueId: '7X3LkN54Yp88JgZbppPhP6hM3Jqiqv8Z2i4kS7phXtQe',
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
    revokeConsent: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'granterChannel',
      },
      description: 'Customer revokes the consent.',
      request: {
        reason: {
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
        revokedAt: {
          type: {
            blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    revokeConsentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'revokeConsent',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const request = event?.message?.request || {};\nconst reason = request.reason || "";\nconst revokedAt = request.revokedAt || "";\nconst canRevoke = document(\'/consentStatus\') === "granted";\n\nreturn {\n  reason,\n  revokedAt,\n  canRevoke,\n  events: canRevoke\n    ? [{ type: "Conversation/Customer Consent Revoked", reason, revokedAt }]\n    : []\n};\n',
            },
            name: 'Capture',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
            },
          },
          {
            changeset: {
              items: [
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/consentStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'revoked',
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/revocationReason',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: "${steps['Capture'].reason}",
                  },
                },
                {
                  op: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '/revokedAt',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: "${steps['Capture'].revokedAt}",
                  },
                },
              ],
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
    },
  },
  description:
    'Generic customer consent granted to a grantee (e.g., merchant).',
  grantedAt: {
    description: 'Timestamp when consent was granted.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  name: 'Customer Consent',
  revocationReason: {
    description: 'Reason for revocation.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  revokedAt: {
    description: 'Timestamp when consent was revoked.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
} as const;
