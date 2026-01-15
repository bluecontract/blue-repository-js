export const PayNoteDelivery = {
  cardTransactionDetails: {
    description:
      'Card network identifiers used to match processor and issuer records.',
    type: {
      blueId: 'GZLRe2fEsvs1v7dVcg9kEnCrWEdM3cUZYhFH4XqN5jQT',
    },
  },
  clientAcceptedAt: {
    description: 'Timestamp when the client accepted.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  clientDecisionStatus: {
    description: 'Client decision (pending, accepted, rejected).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  clientRejectedAt: {
    description: 'Timestamp when the client rejected.',
    type: {
      blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
    },
  },
  contracts: {
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
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'ETAPjwZVyYEfPUWvXkCWAuybBhYUayg4hKC2V7mLXmsv',
                    },
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
                    value: '/transactionIdentificationStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'pending',
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
                    value: '/clientDecisionStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'pending',
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
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '',
                  },
                },
              ],
            },
            name: 'Initialize Delivery State',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
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
    markPayNoteAcceptedByClient: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        acceptedAt: {
          description: 'Timestamp when the client accepted.',
          type: {
            blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    markPayNoteAcceptedByClientImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'markPayNoteAcceptedByClient',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const request =\n  event && event.message ? event.message.request : null;\nconst acceptedAt =\n  request && typeof request.acceptedAt === "string"\n    ? request.acceptedAt\n    : "";\nconst currentDecisionStatus = document(\'/clientDecisionStatus\');\nconst alreadyAccepted = currentDecisionStatus === "accepted";\nconst alreadyRejected = currentDecisionStatus === "rejected";\nconst alreadyDecided = alreadyAccepted || alreadyRejected;\nconst transactionStatus = document(\'/transactionIdentificationStatus\');\nconst canAccept =\n  transactionStatus === "identified" &&\n  currentDecisionStatus === "pending";\nconst discardReason = canAccept\n  ? ""\n  : alreadyDecided\n    ? `PayNote already ${currentDecisionStatus}`\n    : transactionStatus === "failed"\n      ? "Transaction identification failed"\n      : "Transaction not identified";\nconst currentAcceptedAt = document(\'/clientAcceptedAt\');\nconst currentDeliveryStatus =\n  document.canonical(\'/deliveryStatus\') || {\n    type: "Conversation/Status Pending"\n  };\nconst currentDeliveryError = document(\'/deliveryError\');\n\nconst nextDecisionStatus = canAccept\n  ? "accepted"\n  : typeof currentDecisionStatus === "string"\n    ? currentDecisionStatus\n    : "pending";\nconst nextAcceptedAt = canAccept\n  ? acceptedAt\n  : typeof currentAcceptedAt === "string"\n    ? currentAcceptedAt\n    : "";\nconst nextDeliveryStatus = canAccept\n  ? { type: "Conversation/Status Completed" }\n  : currentDeliveryStatus;\nconst nextDeliveryError = canAccept\n  ? ""\n  : typeof currentDeliveryError === "string"\n    ? currentDeliveryError\n    : "";\n\nreturn {\n  acceptedAt,\n  nextDecisionStatus,\n  nextAcceptedAt,\n  nextDeliveryStatus,\n  nextDeliveryError,\n  events: canAccept\n    ? [\n        {\n          type: "PayNote/PayNote Accepted By Client",\n          acceptedAt\n        }\n      ]\n    : [\n        {\n          type: "PayNote/PayNote Client Decision Discarded",\n          decision: "accepted",\n          reason: discardReason,\n          decisionAt: acceptedAt\n        }\n      ]\n};\n',
            },
            name: 'Capture Acceptance Timestamp',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
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
                    value: '/clientDecisionStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Acceptance Timestamp'].nextDecisionStatus}",
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
                    value: '/clientAcceptedAt',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Acceptance Timestamp'].nextAcceptedAt}",
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
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Acceptance Timestamp'].nextDeliveryStatus}",
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
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Acceptance Timestamp'].nextDeliveryError}",
                  },
                },
              ],
            },
            name: 'Apply Acceptance Update',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    markPayNoteRejectedByClient: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        reason: {
          description: 'Optional rejection reason.',
          type: {
            blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
          },
        },
        rejectedAt: {
          description: 'Timestamp when the client rejected.',
          type: {
            blueId: 'GQaGqFxHDz64L1c9QkCbz52ths6bMVtpHnw4QDngzQYs',
          },
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    markPayNoteRejectedByClientImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'markPayNoteRejectedByClient',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const request =\n  event && event.message ? event.message.request : null;\nconst safeReason =\n  typeof request === "string"\n    ? request\n    : request && typeof request.reason === "string"\n      ? request.reason\n      : "";\nconst rejectedAt =\n  request && typeof request.rejectedAt === "string"\n    ? request.rejectedAt\n    : "";\nconst currentDecisionStatus = document(\'/clientDecisionStatus\');\nconst alreadyAccepted = currentDecisionStatus === "accepted";\nconst alreadyRejected = currentDecisionStatus === "rejected";\nconst alreadyDecided = alreadyAccepted || alreadyRejected;\nconst transactionStatus = document(\'/transactionIdentificationStatus\');\nconst canReject =\n  transactionStatus === "identified" &&\n  currentDecisionStatus === "pending";\nconst discardReason = canReject\n  ? ""\n  : alreadyDecided\n    ? `PayNote already ${currentDecisionStatus}`\n    : transactionStatus === "failed"\n      ? "Transaction identification failed"\n      : "Transaction not identified";\n\nconst currentRejectedAt = document(\'/clientRejectedAt\');\nconst currentDeliveryStatus =\n  document.canonical(\'/deliveryStatus\') || {\n    type: "Conversation/Status Pending"\n  };\nconst currentDeliveryError = document(\'/deliveryError\');\n\nconst nextDecisionStatus = canReject\n  ? "rejected"\n  : typeof currentDecisionStatus === "string"\n    ? currentDecisionStatus\n    : "pending";\nconst nextRejectedAt = canReject\n  ? rejectedAt\n  : typeof currentRejectedAt === "string"\n    ? currentRejectedAt\n    : "";\nconst nextDeliveryStatus = canReject\n  ? { type: "Conversation/Status Failed" }\n  : currentDeliveryStatus;\nconst nextDeliveryError = canReject\n  ? safeReason\n  : typeof currentDeliveryError === "string"\n    ? currentDeliveryError\n    : "";\n\nreturn {\n  reason: safeReason,\n  rejectedAt,\n  nextDecisionStatus,\n  nextRejectedAt,\n  nextDeliveryStatus,\n  nextDeliveryError,\n  events: canReject\n    ? [\n        {\n          type: "PayNote/PayNote Rejected By Client",\n          reason: safeReason,\n          rejectedAt\n        }\n      ]\n    : [\n        {\n          type: "PayNote/PayNote Client Decision Discarded",\n          decision: "rejected",\n          reason: discardReason,\n          decisionAt: rejectedAt\n        }\n      ]\n};\n',
            },
            name: 'Capture Rejection Reason',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
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
                    value: '/clientDecisionStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Rejection Reason'].nextDecisionStatus}",
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
                    value: '/clientRejectedAt',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Rejection Reason'].nextRejectedAt}",
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
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Rejection Reason'].nextDeliveryStatus}",
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
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Capture Rejection Reason'].nextDeliveryError}",
                  },
                },
              ],
            },
            name: 'Apply Rejection Update',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    payNoteDeliverer: {
      description: 'Participant delivering and reporting status (e.g., bank).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    payNoteReceiver: {
      description: 'Participant receiving the PayNote delivery (payer).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    payNoteSender: {
      description:
        'Participant submitting the PayNote delivery (merchant or processor).',
      type: {
        blueId: 'HCF8mXnX3dFjQ8osjxb4Wzm2Nm1DoXnTYuA5sPnV7NTs',
      },
    },
    reportDeliveryError: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        description: 'Delivery error reason.',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reportDeliveryErrorImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reportDeliveryError',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const reason =\n  event && event.message ? event.message.request : "";\nconst safeReason = typeof reason === "string" ? reason : "";\n\nreturn {\n  reason: safeReason,\n  events: [\n    {\n      type: "PayNote/PayNote Delivery Failed",\n      reason: safeReason\n    }\n  ]\n};\n',
            },
            name: 'Capture Delivery Failure Reason',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
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
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'Guus3kHbivXvy5G93yhiKs3Pc8sxCc4XVvSo7CqLsQEc',
                    },
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
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: "${steps['Capture Delivery Failure Reason'].reason}",
                  },
                },
              ],
            },
            name: 'Apply Delivery Failure',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    updateTransactionIdentificationStatus: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'payNoteDeliverer',
      },
      request: {
        description: 'True when the transaction is identified.',
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    updateTransactionIdentificationStatusImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'updateTransactionIdentificationStatus',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const request =\n  event && event.message ? event.message.request : null;\nconst identified = request === true;\nconst currentStatus = document(\'/transactionIdentificationStatus\');\nconst canUpdate =\n  currentStatus !== "identified" && currentStatus !== "failed";\nconst identificationStatus = canUpdate\n  ? identified\n    ? "identified"\n    : "failed"\n  : currentStatus;\nconst currentDeliveryStatus =\n  document.canonical(\'/deliveryStatus\') || {\n    type: "Conversation/Status Pending"\n  };\nconst deliveryStatus = canUpdate\n  ? identified\n    ? { type: "Conversation/Status In Progress" }\n    : { type: "Conversation/Status Failed" }\n  : currentDeliveryStatus;\nconst currentDeliveryError = document(\'/deliveryError\');\nconst deliveryError = canUpdate\n  ? identified\n    ? ""\n    : "Transaction identification failed"\n  : typeof currentDeliveryError === "string"\n    ? currentDeliveryError\n    : "";\nconst eventType = identified\n  ? "PayNote/Transaction Identified"\n  : "PayNote/Transaction Identification Failed";\n\nreturn {\n  identificationStatus,\n  deliveryStatus,\n  deliveryError,\n  events: canUpdate ? [{ type: eventType }] : []\n};\n',
            },
            name: 'Classify Identification Result',
            type: {
              blueId: '3hYcmWMtMUPAzXBLFLb7BpuG9537tuTJPCr7pxWXvTZK',
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
                    value: '/transactionIdentificationStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Classify Identification Result'].identificationStatus}",
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
                    value: '/deliveryStatus',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Classify Identification Result'].deliveryStatus}",
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
                    value: '/deliveryError',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Classify Identification Result'].deliveryError}",
                  },
                },
              ],
            },
            name: 'Apply Identification Update',
            type: {
              blueId: 'BnnNLCnKF49TUJ1bRfZ5rSMaFw8SVfUNfnE4kJFG7HtM',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
  },
  deliveryError: {
    description: 'Error message when delivery fails.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  deliveryStatus: {
    description: 'High-level delivery status.',
    type: {
      blueId: '58B8orsFkxxy7bWqjLXJmtBs2b5rwnNQNbeoAbGhPkJc',
    },
  },
  description:
    'Tracks delivery of a PayNote through a deliverer (e.g., bank) to a receiver (payer).',
  name: 'PayNote Delivery',
  payNote: {
    description: 'PayNote being delivered.',
    type: {
      blueId: 'CDMVLRyodD2WhScu2PPRgGquEArMNGXxvZCYiJXg2YjT',
    },
  },
  transactionIdentificationStatus: {
    description: 'Identification state (pending, identified, failed).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
