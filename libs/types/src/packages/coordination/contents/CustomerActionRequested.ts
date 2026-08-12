export const CustomerActionRequested: Record<string, unknown> = {
  actions: {
    description:
      'Allowed action labels or structured options. Their order is the display/order preference.\n',
    itemType: {
      inputPlaceholder: {
        description:
          'Optional placeholder/help text shown in the action input control.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      inputRequired: {
        description:
          'Optional flag indicating whether input is required for this action.',
        type: {
          blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
        },
      },
      inputSchema: {
        description:
          'Optional input schema. If present, the selected action may collect user input.',
      },
      inputTitle: {
        description: 'Optional title displayed above the action input control.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      label: {
        description:
          'User-facing action label shown in the pending action card.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
      variant: {
        description:
          'Optional button style variant. Supported values: primary | secondary | reject.',
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  description:
    'Event requesting that a customer, user, or participant take an explicit action. This is typically emitted when an\nautomated workflow reaches a point that needs human review, consent, selection, confirmation, or additional input.\n\nThe event should describe the requested action in human-readable form and provide a deterministic list of allowed\nactions. The response should be represented by Customer Action Responded or a domain-specific response event.\n',
  message: {
    description:
      'Detailed human-readable explanation of what is being requested and why.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'Customer Action Requested',
  title: {
    description:
      'Title shown to the user or participant for the pending action.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '6XYXgjV6ja1oLqLCs3TWy4RP5UwmpPZKcppBfwwXcckU',
  },
};
