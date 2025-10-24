export const smartTransfer = {
  cancelled: {
    description: 'Whether transfer has been cancelled',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  captured: {
    description: 'Whether transfer has been executed',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  contracts: {
    authorizeTransfer: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Amount to authorize for transfer',
        type: {
          blueId: '3MmBpnHfzcm8JLwMZx5nBXo6S1eyjf5Gz17Js4N4Wvfj',
        },
      },
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
      },
    },
    authorizeTransferImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'authorizeTransfer',
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
                    value: '/transferValue',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request}',
                  },
                },
              ],
            },
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const transferValue = event.message.request;\nconst type = "Transfer Authorization Approved by Bank";\nreturn { "events": [{ "type": type, "transferValue": transferValue }] };\n',
            },
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
        ],
      },
      type: {
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
    bankChannel: {
      type: {
        blueId: '64NmLPmy8DBzocUccDrwmwNus3pKg7r1Xd8vewQ8cLHo',
      },
    },
    cancelTransfer: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Cancel the pending transfer',
        type: {
          blueId: '3MmBpnHfzcm8JLwMZx5nBXo6S1eyjf5Gz17Js4N4Wvfj',
        },
      },
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
      },
    },
    cancelTransferImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'cancelTransfer',
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
                    value: '/cancelled',
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
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            event: {
              type: {
                blueId: '76RNmYLf2tz6urNmZTFmx8SMdYoxUdRaGJTDNbfkDYcr',
              },
            },
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
          },
        ],
      },
      type: {
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
    captureTransfer: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Execute the authorized transfer',
        type: {
          blueId: '3MmBpnHfzcm8JLwMZx5nBXo6S1eyjf5Gz17Js4N4Wvfj',
        },
      },
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
      },
    },
    captureTransferImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'captureTransfer',
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
                    value: '/captured',
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
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            event: {
              type: {
                blueId: '9VxFD2G57RLHBfAuKTpXTdr3GDV5TVXuje6ZPUsYJfHV',
              },
            },
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
          },
        ],
      },
      type: {
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
    specifyPayeeAccountNumber: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Account number where funds should be sent',
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
      },
      type: {
        blueId: 'H3KTSmqjT48Fjdoj5vY8EE98Sbp2FeNqBHGmUExRmrGk',
      },
    },
    specifyPayeeAccountNumberImpl: {
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'specifyPayeeAccountNumber',
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
                    value: '/payeeAccountNumber',
                  },
                  val: {
                    type: {
                      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
                    },
                    value: '${event.message.request}',
                  },
                },
              ],
            },
            type: {
              blueId: '54tUHQY9L5Nu1YL3d86RfGPpNH5kzbxntssaS8yGmTXm',
            },
          },
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value:
                'const payeeAccountNumber = event.message.request;\nconst type = "Payee Account Number Change Approved by Bank";\nreturn { "events": [{ "type": type, "payeeAccountNumber": payeeAccountNumber }] };\n',
            },
            type: {
              blueId: 'Hz1LwvihraqVw1xEhSG6eeKnnFnytPNTXKMZgG8wtWtR',
            },
          },
        ],
      },
      type: {
        blueId: 'JAaLYym23FbqTJkan4NfmNpKxMHbXLHm71oxPqmFB2Sq',
      },
    },
  },
  description: 'Bank transfer with multi-stage approval workflow',
  name: 'Smart Transfer',
  payeeAccountNumber: {
    description: 'Destination account for the transfer',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  payerAccountNumber: {
    description: 'Source account for the transfer',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  transferValue: {
    description: 'Amount to be transferred',
    type: {
      blueId: '3MmBpnHfzcm8JLwMZx5nBXo6S1eyjf5Gz17Js4N4Wvfj',
    },
  },
} as const;
