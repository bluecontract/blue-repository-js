export const smartTransfer = {
  name: 'Smart Transfer',
  description: 'Bank transfer with multi-stage approval workflow',
  payerAccountNumber: {
    description: 'Source account for the transfer',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  payeeAccountNumber: {
    description: 'Destination account for the transfer',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  captured: {
    description: 'Whether transfer has been executed',
    type: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  transferValue: {
    description: 'Amount to be transferred',
    type: {
      blueId: '2j7UPYByyy4QPwUcegt1kpp7u7xT2qkKvUQsahzqzS69',
    },
  },
  cancelled: {
    description: 'Whether transfer has been cancelled',
    type: {
      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
    },
  },
  contracts: {
    authorizeTransferImpl: {
      type: {
        blueId: '25oL2pyz4VZKCzA4CeRNjv2ixAL4EpMsDaJj4UyEW2gF',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'authorizeTransfer',
      },
      steps: {
        items: [
          {
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.value}',
                  },
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
                },
              ],
            },
          },
          {
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
            event: {
              type: {
                blueId: '49ThQrHgJdJGs2FgyKrTe1cf98VV6xXe9r6wZJtjAiyE',
              },
              transferValue: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${event.value}',
              },
            },
          },
        ],
      },
    },
    captureTransfer: {
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
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
    },
    captureTransferImpl: {
      type: {
        blueId: '25oL2pyz4VZKCzA4CeRNjv2ixAL4EpMsDaJj4UyEW2gF',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'captureTransfer',
      },
      steps: {
        items: [
          {
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                    },
                    value: true,
                  },
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
                },
              ],
            },
          },
          {
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
            event: {
              type: {
                blueId: '9VxFD2G57RLHBfAuKTpXTdr3GDV5TVXuje6ZPUsYJfHV',
              },
            },
          },
        ],
      },
    },
    specifyPayeeAccountNumber: {
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
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
    },
    cancelTransfer: {
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
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
    },
    specifyPayeeAccountNumberImpl: {
      type: {
        blueId: '25oL2pyz4VZKCzA4CeRNjv2ixAL4EpMsDaJj4UyEW2gF',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'specifyPayeeAccountNumber',
      },
      steps: {
        items: [
          {
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                    },
                    value: '${event.value}',
                  },
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
                },
              ],
            },
          },
          {
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
            event: {
              type: {
                blueId: 'Yrpy3UA4KhfW5axU2E5rCoejQnHDaTjaZBLKUgcVb1d',
              },
              payeeAccountNumber: {
                type: {
                  blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
                },
                value: '${event.value}',
              },
            },
          },
        ],
      },
    },
    cancelTransferImpl: {
      type: {
        blueId: '25oL2pyz4VZKCzA4CeRNjv2ixAL4EpMsDaJj4UyEW2gF',
      },
      operation: {
        type: {
          blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
        },
        value: 'cancelTransfer',
      },
      steps: {
        items: [
          {
            type: {
              blueId: 'Bf61yTzodeWXWCTaiZqNNPf5Zbpet1ZUczvuewiL3rSZ',
            },
            changeset: {
              items: [
                {
                  val: {
                    type: {
                      blueId: 'EL6AjrbJsxTWRTPzY8WR8Y2zAMXRbydQj83PcZwuAHbo',
                    },
                    value: true,
                  },
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
                },
              ],
            },
          },
          {
            type: {
              blueId: 'BWBJFxM7DtorfwMewvrfn3938VBCa3seKXTkkfpCwrQ1',
            },
            event: {
              type: {
                blueId: '76RNmYLf2tz6urNmZTFmx8SMdYoxUdRaGJTDNbfkDYcr',
              },
            },
          },
        ],
      },
    },
    authorizeTransfer: {
      type: {
        blueId: 'APkQmnhBWzQzpZAPHgyHeVm9QK8geARgVFg6418oFH1C',
      },
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
    },
    bankChannel: {
      type: {
        blueId: 'xyBvDpt4fv9uqLMEvpJz4u6NDM9cpuanrmk1VsY7Z6V',
      },
    },
  },
} as const;
