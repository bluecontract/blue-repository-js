export const payNote = {
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
        blueId: '64NmLPmy8DBzocUccDrwmwNus3pKg7r1Xd8vewQ8cLHo',
      },
    },
    payeeChannel: {
      type: {
        blueId: '64NmLPmy8DBzocUccDrwmwNus3pKg7r1Xd8vewQ8cLHo',
      },
    },
    payerChannel: {
      type: {
        blueId: '64NmLPmy8DBzocUccDrwmwNus3pKg7r1Xd8vewQ8cLHo',
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
} as const;
