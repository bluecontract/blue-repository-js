export const PayNote = {
  amount: {
    completed: {
      description: 'Amount already completed / finalized.\n',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
    description: 'Amount values associated with this PayNote.',
    expectedTotal: {
      description: 'The initially expected total amount in minor units.\n',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
    finalResolved: {
      description: 'The final resolved amount for completion, if known.\n',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
    reversed: {
      description: 'Amount already reversed after completion.\n',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
    secured: {
      description: 'Amount currently secured / under guarantor control.\n',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
  },
  contracts: {
    acceptPayNote: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '3kyFUyupzb49ZoxVHnUhVe4XAbEN1Hpy8zN9Dx75GNyc',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    acceptPayNoteImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'acceptPayNote',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Accepted',
                  },
                },
              ],
            },
            name: 'Mark PayNote Accepted',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              type: {
                blueId: 'CfSpcRXYk2qwu1vNs9LL8rycBsxzL2R4LGyDdrDzwCjh',
              },
            },
            name: 'Emit PayNote Accepted',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    cancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '4oyKGB49m8MuAFdxgHZauwhDFvdBgziHnb9CCGeKNqEc',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    cancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'cancelBeforeCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Cancelled',
                  },
                },
              ],
            },
            name: 'Mark Cancelled Before Completion',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              type: {
                blueId: '9hvBQjesbYZPkZSaikm5avp7sFjTHsjRkQS2gas1u49p',
              },
            },
            name: 'Emit Payment Cancelled Before Completion',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    completePayment: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '72eeCYvygiChLj529TP1HKKBaYyB5TBa15Y3cn3JGsak',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    completePaymentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'completePayment',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Completed',
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
                    value: '/amount/completed',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request.amountCompleted}',
                  },
                },
              ],
            },
            name: 'Update Completed Amount',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              amountCompleted: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.amountCompleted}',
              },
              type: {
                blueId: '72eeCYvygiChLj529TP1HKKBaYyB5TBa15Y3cn3JGsak',
              },
            },
            name: 'Emit Payment Completed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    confirmPayeeAssignment: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '34v52X6nVj6muiD11W8nohLFn7DjT2RiaRYwjRNpq4v3',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmPayeeAssignmentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmPayeeAssignment',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request =\n  event && event.message ? event.message.request : null;\n\nif (!request || typeof request !== 'object' || Array.isArray(request)) {\n  throw new Error('Payee assignment payload must be an object.');\n}\nif (typeof request.payeeRef !== 'string') {\n  throw new Error('Payee assignment payload must include payeeRef.');\n}\n\nconst current = document('/transactionDetails');\nconst next =\n  current && typeof current === 'object' && !Array.isArray(current)\n    ? { ...current }\n    : {};\nnext.payeeRef = request.payeeRef;\n\nreturn { nextTransactionDetails: next, events: [request] };\n",
            },
            name: 'Merge Payee Assignment',
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
                    value: '/transactionDetails',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Merge Payee Assignment'].nextTransactionDetails}",
                  },
                },
              ],
            },
            name: 'Update Payee Assignment',
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
    confirmTransactionDetailsUpdated: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'EsyQj8xWb1Kf2ESjDq1UR6PK2hx4fpnyGiEWJ14ttC8a',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    confirmTransactionDetailsUpdatedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'confirmTransactionDetailsUpdated',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request =\n  event && event.message ? event.message.request : null;\n\nif (!request || typeof request !== 'object' || Array.isArray(request)) {\n  throw new Error('Transaction details update payload must be an object.');\n}\nif (\n  !request.transactionDetails ||\n  typeof request.transactionDetails !== 'object' ||\n  Array.isArray(request.transactionDetails)\n) {\n  throw new Error(\n    'Transaction details update payload must include transactionDetails object.'\n  );\n}\n\nconst current = document('/transactionDetails');\nconst next =\n  current && typeof current === 'object' && !Array.isArray(current)\n    ? { ...current }\n    : {};\nconst patch = request.transactionDetails;\n\nconst patchKeys = Object.keys(patch);\nlet index = 0;\nwhile (index < patchKeys.length) {\n  const key = patchKeys[index];\n  next[key] = patch[key];\n  index += 1;\n}\n\nreturn { nextTransactionDetails: next, events: [request] };\n",
            },
            name: 'Merge Transaction Details Update',
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
                    value: '/transactionDetails',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Merge Transaction Details Update'].nextTransactionDetails}",
                  },
                },
              ],
            },
            name: 'Apply Transaction Details Update',
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
    declineCancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '4witPJDjFKHNHyucepuDn9KXyUTTqZQTVsKHvcrVbGvY',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    declineCancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'declineCancelBeforeCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Cancellation Declined',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '4witPJDjFKHNHyucepuDn9KXyUTTqZQTVsKHvcrVbGvY',
              },
            },
            name: 'Emit Payment Cancellation Declined',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    declineCompletePayment: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '9AL8hghruGSH1ibFSYE8N7xoPLWLkktTCMFRkdoNsfTN',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    declineCompletePaymentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'declineCompletePayment',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Completion Declined',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '9AL8hghruGSH1ibFSYE8N7xoPLWLkktTCMFRkdoNsfTN',
              },
            },
            name: 'Emit Payment Completion Declined',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    declineReverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'Fk96a7GFSo2c3w7xWzaqnYhXXhLAAxj9Dwao8Hg9sdX',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    declineReverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'declineReverseAfterCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Payment Reversal Declined',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'Fk96a7GFSo2c3w7xWzaqnYhXXhLAAxj9Dwao8Hg9sdX',
              },
            },
            name: 'Emit Payment Reversal Declined',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    declineSecureFunds: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '8PufMmsuBgpX5YCpiS7XuiCFUWDan1fN8c3TLLwh57gL',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    declineSecureFundsImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'declineSecureFunds',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark Funds Securing Declined',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '8PufMmsuBgpX5YCpiS7XuiCFUWDan1fN8c3TLLwh57gL',
              },
            },
            name: 'Emit Funds Securing Declined',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failCancelBeforeCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'ExfGtqDcSr7RkvA7XzdV5B1MVc7CPacHpanjGBtGhjyk',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failCancelBeforeCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failCancelBeforeCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Cancellation Failed',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'ExfGtqDcSr7RkvA7XzdV5B1MVc7CPacHpanjGBtGhjyk',
              },
            },
            name: 'Emit Payment Cancellation Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failCompletePayment: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'An4JGf9zvSwEtYPJjZaWRnHaPXXvmyHg7oNLmJRKuxSV',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failCompletePaymentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failCompletePayment',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Completion Failed',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'An4JGf9zvSwEtYPJjZaWRnHaPXXvmyHg7oNLmJRKuxSV',
              },
            },
            name: 'Emit Payment Completion Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failPaymentCompletionLockChange: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'DG24you4q9reWwc93JPhCK21WoAtP8w9Y6HThyWmL41e',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failPaymentCompletionLockChangeImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failPaymentCompletionLockChange',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'DG24you4q9reWwc93JPhCK21WoAtP8w9Y6HThyWmL41e',
              },
            },
            name: 'Emit Payment Completion Lock Change Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failPaymentReversalLockChange: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'DYUz7mcFpgQdRNwwsSSBdDe3CYtfRbAeAUiEv6tuLDhy',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failPaymentReversalLockChangeImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failPaymentReversalLockChange',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'DYUz7mcFpgQdRNwwsSSBdDe3CYtfRbAeAUiEv6tuLDhy',
              },
            },
            name: 'Emit Payment Reversal Lock Change Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failReverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'FNZQJMETUdV57VFyWHGPdQVPSjWsvGj7u4n2oKYbgAaH',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failReverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failReverseAfterCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Payment Reversal Failed',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'FNZQJMETUdV57VFyWHGPdQVPSjWsvGj7u4n2oKYbgAaH',
              },
            },
            name: 'Emit Payment Reversal Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failSecureFunds: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '67BprL1WeSSpJDKawcnaNC6VF2vz68JQ5qrVfi37biBA',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failSecureFundsImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failSecureFunds',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Funds Securing Failed',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '67BprL1WeSSpJDKawcnaNC6VF2vz68JQ5qrVfi37biBA',
              },
            },
            name: 'Emit Funds Securing Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '2dmAPySotyaWEPRLBYMiooqrqa3v42pyrHYvWskMMsMb',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failTransactionDetailsUpdate',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '2dmAPySotyaWEPRLBYMiooqrqa3v42pyrHYvWskMMsMb',
              },
            },
            name: 'Emit Transaction Details Update Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    failTransactionDetailsUpdateLockChange: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '1j22qLMeLkRgtwiMHWXJNopKeBHdACS4vELfLxc1mnA',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    failTransactionDetailsUpdateLockChangeImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'failTransactionDetailsUpdateLockChange',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: '1j22qLMeLkRgtwiMHWXJNopKeBHdACS4vELfLxc1mnA',
              },
            },
            name: 'Emit Transaction Details Update Lock Change Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    guarantorChannel: {
      type: {
        blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Pending',
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
                    value: '/amount/finalResolved',
                  },
                  val: {
                    type: {
                      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                    },
                    value: 0,
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
                    value: '/amount/secured',
                  },
                  val: {
                    type: {
                      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                    },
                    value: 0,
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
                    value: '/amount/completed',
                  },
                  val: {
                    type: {
                      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                    },
                    value: 0,
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
                    value: '/amount/reversed',
                  },
                  val: {
                    type: {
                      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
                    },
                    value: 0,
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
                    value: '/controls/completionLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
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
                    value: '/controls/reversalLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
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
                    value: '/controls/transactionDetailsUpdateLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
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
                    value: '/transactionDetails',
                  },
                  val: {},
                },
              ],
            },
            name: 'Initialize PayNote Runtime State',
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
    lockPaymentCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'BKBtKSbxAxg1vyg2ZcghVANjaS4viMxUFY2un6TDPWbw',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    lockPaymentCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'lockPaymentCompletion',
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
                    value: '/controls/completionLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Completion Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              lockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.lockedAt}',
              },
              type: {
                blueId: 'BKBtKSbxAxg1vyg2ZcghVANjaS4viMxUFY2un6TDPWbw',
              },
            },
            name: 'Emit Payment Completion Locked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    lockPaymentReversal: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '5fKdfddLui1nNGHq2hKyEZm8pR6vaN7BRcuomWJPj82Z',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    lockPaymentReversalImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'lockPaymentReversal',
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
                    value: '/controls/reversalLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Reversal Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              lockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.lockedAt}',
              },
              type: {
                blueId: '5fKdfddLui1nNGHq2hKyEZm8pR6vaN7BRcuomWJPj82Z',
              },
            },
            name: 'Emit Payment Reversal Locked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    lockTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'eoi7pHyfDPfN9EkHcCNMekiZubrBa9EyywmnWrGUsGb',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    lockTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'lockTransactionDetailsUpdate',
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
                    value: '/controls/transactionDetailsUpdateLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: true,
                  },
                },
              ],
            },
            name: 'Enable Transaction Details Update Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              lockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.lockedAt}',
              },
              type: {
                blueId: 'eoi7pHyfDPfN9EkHcCNMekiZubrBa9EyywmnWrGUsGb',
              },
            },
            name: 'Emit Transaction Details Update Locked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    payeeChannel: {
      type: {
        blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
      },
    },
    payerChannel: {
      type: {
        blueId: 'DcoJyCh7XXxy1nR5xjy7qfkUgQ1GiZnKKSxh8DJusBSr',
      },
    },
    recordTransactionInitiated: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '14UHCXtf9XLpi3Z3n4xbo1dmXRzfXnDEH23iVaechxzh',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    recordTransactionInitiatedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'recordTransactionInitiated',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request =\n  event && event.message ? event.message.request : null;\n\nif (!request || typeof request !== 'object' || Array.isArray(request)) {\n  throw new Error('Transaction initiated payload must be an object.');\n}\n\nconst current = document('/transactionDetails');\nconst next =\n  current && typeof current === 'object' && !Array.isArray(current)\n    ? { ...current }\n    : {};\nconst keys = Object.keys(request);\nlet index = 0;\nwhile (index < keys.length) {\n  const key = keys[index];\n  if (key !== 'type') {\n    next[key] = request[key];\n  }\n  index += 1;\n}\n\nreturn { nextTransactionDetails: next, events: [request] };\n",
            },
            name: 'Merge Initiation Transaction Details',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Initiated',
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
                    value: '/transactionDetails',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value:
                      "${steps['Merge Initiation Transaction Details'].nextTransactionDetails}",
                  },
                },
              ],
            },
            name: 'Update Initiation State',
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
    recordTransactionInitiationFailed: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'FSfMCJpFDcB9zNfrd4gDhaDXpFhaSNToGbAdxSkw55V7',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    recordTransactionInitiationFailedImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'recordTransactionInitiationFailed',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Failed',
                  },
                },
              ],
            },
            name: 'Mark Initiation Failed',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'FSfMCJpFDcB9zNfrd4gDhaDXpFhaSNToGbAdxSkw55V7',
              },
            },
            name: 'Emit Transaction Initiation Failed',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    rejectFinalAmountResolution: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'E6zFPqoEmEdP9xFa1A9FDSsDJDb7BaR7tXakVD7RN8oH',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectFinalAmountResolutionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectFinalAmountResolution',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'E6zFPqoEmEdP9xFa1A9FDSsDJDb7BaR7tXakVD7RN8oH',
              },
            },
            name: 'Emit Final Amount Resolution Rejected',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    rejectPayeeAssignment: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'CNFxs2PfxjDh7HNCaehyxNJ8zAdLbmgTcH12rU8VA7yi',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectPayeeAssignmentImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectPayeeAssignment',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'CNFxs2PfxjDh7HNCaehyxNJ8zAdLbmgTcH12rU8VA7yi',
              },
            },
            name: 'Emit Payee Assignment Rejected',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    rejectPayNote: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'AdKfkwRfzRUxUKSzhRfYANsaUBNnz4u6JFWR66qhzyZe',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectPayNoteImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectPayNote',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                "const request =\n  event && event.message ? event.message.request : null;\n\nif (!request || typeof request !== 'object' || Array.isArray(request)) {\n  throw new Error('PayNote rejection request must be an object.');\n}\n\nreturn { events: [request] };\n",
            },
            name: 'Validate and Forward Rejection',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Rejected',
                  },
                },
              ],
            },
            name: 'Mark PayNote Rejected',
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
    rejectTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'tF2fYwf8b7HwErSWAduxWXoV8v7pMQPHVCsSZhZzhmT',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    rejectTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'rejectTransactionDetailsUpdate',
      },
      steps: {
        items: [
          {
            event: {
              reason: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.reason}',
              },
              type: {
                blueId: 'tF2fYwf8b7HwErSWAduxWXoV8v7pMQPHVCsSZhZzhmT',
              },
            },
            name: 'Emit Transaction Details Update Rejected',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    resolveFinalAmount: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '7oKW3Fozo1KUPgxo4PdF6jJJQ83z11mBbpZF2xCENGDX',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    resolveFinalAmountImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'resolveFinalAmount',
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
                    value: '/amount/finalResolved',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request.finalAmount}',
                  },
                },
              ],
            },
            name: 'Update Final Amount',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              finalAmount: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.finalAmount}',
              },
              type: {
                blueId: '7oKW3Fozo1KUPgxo4PdF6jJJQ83z11mBbpZF2xCENGDX',
              },
            },
            name: 'Emit Final Amount Resolved',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    reverseAfterCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '81whmkSDanPULQUi4sMuVkxiWDLHb3VPC5PeLfJCXCGo',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    reverseAfterCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'reverseAfterCompletion',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Reversed',
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
                    value: '/amount/reversed',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request.amountReversed}',
                  },
                },
              ],
            },
            name: 'Update Reversed Amount',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              amountReversed: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.amountReversed}',
              },
              type: {
                blueId: '81whmkSDanPULQUi4sMuVkxiWDLHb3VPC5PeLfJCXCGo',
              },
            },
            name: 'Emit Payment Reversed After Completion',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    secureFunds: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'DvxVaiLspGpmTY5SiZDb85sJLcvzBCoJCjCHSAmVFbGT',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    secureFundsImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'secureFunds',
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
                    value: '/status',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: 'Secured',
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
                    value: '/amount/secured',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request.amountSecured}',
                  },
                },
              ],
            },
            name: 'Update Secured Amount',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              amountSecured: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.amountSecured}',
              },
              type: {
                blueId: 'DvxVaiLspGpmTY5SiZDb85sJLcvzBCoJCjCHSAmVFbGT',
              },
            },
            name: 'Emit Funds Secured',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    unlockPaymentCompletion: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'BZxWkxpxVygutoo7KuBd7C63nZwYDuPXFhffXhZ319z9',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    unlockPaymentCompletionImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'unlockPaymentCompletion',
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
                    value: '/controls/completionLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Completion Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              type: {
                blueId: 'BZxWkxpxVygutoo7KuBd7C63nZwYDuPXFhffXhZ319z9',
              },
              unlockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.unlockedAt}',
              },
            },
            name: 'Emit Payment Completion Unlocked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    unlockPaymentReversal: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: 'HPLY55rtyD7BVZaHWhB9iUP7AoFTykn6ZCF3K3BaBbVu',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    unlockPaymentReversalImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'unlockPaymentReversal',
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
                    value: '/controls/reversalLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Reversal Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              type: {
                blueId: 'HPLY55rtyD7BVZaHWhB9iUP7AoFTykn6ZCF3K3BaBbVu',
              },
              unlockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.unlockedAt}',
              },
            },
            name: 'Emit Payment Reversal Unlocked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
    unlockTransactionDetailsUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      request: {
        type: {
          blueId: '8H1L8VGE9vXzbGgrv5RNkpYXngf43futPHQvnJ4SJD2B',
        },
      },
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    unlockTransactionDetailsUpdateImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'unlockTransactionDetailsUpdate',
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
                    value: '/controls/transactionDetailsUpdateLocked',
                  },
                  val: {
                    type: {
                      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
                    },
                    value: false,
                  },
                },
              ],
            },
            name: 'Disable Transaction Details Update Lock',
            type: {
              blueId: 'FtHZJzH4hqAoGxFBjsmy1svfT4BwEBB4aHpFSZycZLLa',
            },
          },
          {
            event: {
              type: {
                blueId: '8H1L8VGE9vXzbGgrv5RNkpYXngf43futPHQvnJ4SJD2B',
              },
              unlockedAt: {
                type: {
                  blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                },
                value: '${event.message.request.unlockedAt}',
              },
            },
            name: 'Emit Transaction Details Update Unlocked',
            type: {
              blueId: '2bSWEoMSZwzf32Hnr4BDVsuq8NRjrWEpnhZvMZAJGhh2',
            },
          },
        ],
      },
      type: {
        blueId: 'CGdxkNjPcsdescqLPz6SNLsMyak6demQQr7RoKNHbCyv',
      },
    },
  },
  controls: {
    completionLocked: {
      type: {
        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
      },
    },
    reversalLocked: {
      type: {
        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
      },
    },
    transactionDetailsUpdateLocked: {
      type: {
        blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
      },
    },
  },
  currency: {
    description: 'ISO 4217 currency code.',
    type: {
      blueId: 'CBnZ7aaNetj9KEqXpUWj5jvjKbmviLivP98T2EiyxiYc',
    },
  },
  description:
    'A document attached to exactly one transaction that governs what should happen with that transaction.\n',
  name: 'PayNote',
  payNoteInitialStateDescription: {
    details: {
      description:
        'Full explanation of the process, conditions, and special rules. Markdown recommended.\n',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    summary: {
      description: 'Short explanation of what this PayNote is for.\n',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  status: {
    description:
      'Current lifecycle state of this PayNote. Expected values include: Pending, Accepted, Initiated, Secured, Completed, Cancelled, Reversed, Rejected, Failed.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  transactionDetails: {
    description:
      'Transaction attachment information confirmed by the Guarantor.\n',
  },
} as const;
