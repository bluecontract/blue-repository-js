export const PayNote = {
  amount: {
    captured: {
      description: 'The amount that has been successfully captured.',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
      value: 0,
    },
    description: 'The amounts associated with this PayNote.',
    reserved: {
      description: 'The amount currently reserved by the Guarantor.',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
      value: 0,
    },
    total: {
      description: 'The maximum total value of this PayNote.',
      type: {
        blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
      },
    },
  },
  contracts: {
    guarantorChannel: {
      type: {
        blueId: 'EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH',
      },
    },
    guarantorUpdate: {
      channel: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorChannel',
      },
      description:
        'Standard operation used by the guarantor (bank) to deliver events into the document.',
      type: {
        blueId: 'BoAiqVUZv9Fum3wFqaX2JnQMBHJLxJSo2V9U2UBmCfsC',
      },
    },
    guarantorUpdateImpl: {
      description: 'Re-emits provided events (MyOS-admin style).',
      operation: {
        type: {
          blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
        },
        value: 'guarantorUpdate',
      },
      steps: {
        items: [
          {
            code: {
              type: {
                blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
              },
              value: 'return { events: event.message.request };\n',
            },
            name: 'EmitGuarantorEvents',
            type: {
              blueId: 'ExZxT61PSpWHpEAtP2WKMXXqxEYN7Z13j7Zv36Dp99kS',
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
        blueId: 'EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH',
      },
    },
    payerChannel: {
      type: {
        blueId: 'EvuCWsG1E6WJQg8QXmk6rwMANYTZjoLWVZ1vYQWUwdTH',
      },
    },
  },
  currency: {
    description: 'The ISO 4217 currency code for the transaction.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  description:
    'A verifiable instrument for managing a commitment of value between a Payer, Payee, and Guarantor.',
  name: 'PayNote',
  payNoteInitialStateDescription: {
    details: {
      description:
        'Complete text description of the PayNote, with everything significant explained.\nMarkdown format suggested.\n',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
    summary: {
      description:
        'General information about the PayNote. It should capture the most important\ninformation, most critical or non-standard elements should be covered here.\nMarkdown format suggested.\n',
      type: {
        blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
      },
    },
  },
  status: {
    description:
      'The current state of the PayNote (e.g., Pending, Approved, Reserved, Captured, Released, Rejected).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
    value: 'Pending',
  },
  transactionStatus: {
    description:
      'Optional status snapshot. If present in proposal, bank validates it; if missing bank sets it at bootstrap.',
    type: {
      blueId: 'FutWoAEUEb3wkmEm4YP4JGFPtu3B3PQ3m71BmnRFFnsQ',
    },
  },
} as const;
