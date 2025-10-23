export const smartTransfer = {
  cancelled: {
    description: 'Whether transfer has been cancelled',
    type: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  captured: {
    description: 'Whether transfer has been executed',
    type: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  contracts: {
    authorizeTransfer: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Amount to authorize for transfer',
        type: {
          blueId: '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69',
        },
      },
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
    },
    authorizeTransferImpl: {
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/transferValue',
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.message.request}',
                  },
                },
              ],
            },
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
          {
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'const transferValue = event.message.request;\nconst type = "Transfer Authorization Approved by Bank";\nreturn { "events": [{ "type": type, "transferValue": transferValue }] };\n',
            },
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
          },
        ],
      },
      type: {
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
    },
    bankChannel: {
      type: {
        blueId: 'xyBvDpt4fv9uqLMEvpJz4u6NDM9cpuanrmk1VsY7Z6V',
      },
    },
    cancelTransfer: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Cancel the pending transfer',
        type: {
          blueId: '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69',
        },
      },
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
    },
    cancelTransferImpl: {
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/cancelled',
                  },
                  val: {
                    type: {
                      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                    },
                    value: true,
                  },
                },
              ],
            },
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
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
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
    },
    captureTransfer: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Execute the authorized transfer',
        type: {
          blueId: '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69',
        },
      },
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
    },
    captureTransferImpl: {
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/captured',
                  },
                  val: {
                    type: {
                      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                    },
                    value: true,
                  },
                },
              ],
            },
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
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
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
    },
    specifyPayeeAccountNumber: {
      channel: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'bankChannel',
      },
      request: {
        description: 'Account number where funds should be sent',
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
      },
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
    },
    specifyPayeeAccountNumberImpl: {
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: 'replace',
                  },
                  path: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '/payeeAccountNumber',
                  },
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.message.request}',
                  },
                },
              ],
            },
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
          },
          {
            code: {
              type: {
                blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
              },
              value:
                'const payeeAccountNumber = event.message.request;\nconst type = "Payee Account Number Change Approved by Bank";\nreturn { "events": [{ "type": type, "payeeAccountNumber": payeeAccountNumber }] };\n',
            },
            type: {
              blueId: 'CbkaaimMgTw2L5AP6bVWVKVArHkkrKuJxu6Uo4o6Piwr',
            },
          },
        ],
      },
      type: {
        blueId: '27JYkbWuBwyPYUZCjP67K6hxXQ7gndzdwgU8yrau2465',
      },
    },
  },
  description: 'Bank transfer with multi-stage approval workflow',
  name: 'Smart Transfer',
  payeeAccountNumber: {
    description: 'Destination account for the transfer',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  payerAccountNumber: {
    description: 'Source account for the transfer',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  transferValue: {
    description: 'Amount to be transferred',
    type: {
      blueId: '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69',
    },
  },
} as const;
