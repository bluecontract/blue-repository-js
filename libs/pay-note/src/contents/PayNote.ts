export const payNote = {
  amount: {
    captured: {
      description: 'The amount that has been successfully captured.',
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
      value: 0,
    },
    description: 'The amounts associated with this PayNote.',
    reserved: {
      description: 'The amount currently reserved by the Guarantor.',
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
      value: 0,
    },
    total: {
      description: 'The maximum total value of this PayNote.',
      type: {
        blueId: 'DHmxTkFbXePZHCHCYmQr2dSzcNLcryFVjXVHkdQrrZr8',
      },
    },
  },
  contracts: {
    guarantorChannel: {
      type: {
        blueId: 'xyBvDpt4fv9uqLMEvpJz4u6NDM9cpuanrmk1VsY7Z6V',
      },
    },
    payeeChannel: {
      type: {
        blueId: 'xyBvDpt4fv9uqLMEvpJz4u6NDM9cpuanrmk1VsY7Z6V',
      },
    },
    payerChannel: {
      type: {
        blueId: 'xyBvDpt4fv9uqLMEvpJz4u6NDM9cpuanrmk1VsY7Z6V',
      },
    },
  },
  currency: {
    description: 'The ISO 4217 currency code for the transaction.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
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
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
    summary: {
      description:
        'General information about the PayNote. It should capture the most important\ninformation, most critical or non-standard elements should be covered here.\nMarkdown format suggested.\n',
      type: {
        blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
      },
    },
  },
  status: {
    description:
      'The current state of the PayNote (e.g., Pending, Approved, Reserved, Captured, Released, Rejected).',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
    value: 'Pending',
  },
} as const;
