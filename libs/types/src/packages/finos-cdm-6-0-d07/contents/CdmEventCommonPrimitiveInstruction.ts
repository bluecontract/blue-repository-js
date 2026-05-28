export const CdmEventCommonPrimitiveInstruction = {
  contractFormation: {
    description:
      'Specifies instructions describing an contract formation primitive event.',
    type: {
      blueId: '8sWBuDCNB5CU2KAPqM9MbS1YnWs7XXXHSwBZ3u9wkBgX',
    },
  },
  description:
    'A Primitive Instruction describes the inputs required to pass into the corresponding PrimitiveEvent function.',
  execution: {
    description:
      'Specifies instructions describing an execution primitive event.',
    type: {
      blueId: 'BjTwLDK7HwHXyVMxzicMA3VkVKfqaJbiEBPWQc2zogzw',
    },
  },
  exercise: {
    description:
      'Specifies instructions describing an exercise primitive event.',
    type: {
      blueId: 'this#1',
    },
  },
  indexTransition: {
    description:
      'Specifies inputs needed to process a Index Transition business event.',
    type: {
      blueId: '4h8Hk4G2qP8cK5WAMzdQNkMdsPkLH7teFQRJqhe7VAh4',
    },
  },
  name: 'cdm/event/common/PrimitiveInstruction',
  observation: {
    description: 'Specifies inputs needed to process an observation.',
    type: {
      blueId: '4TiZGE3EKm8kGwGtipCB7SEXRoitCDwxdB8rCyr6mRsC',
    },
  },
  partyChange: {
    description:
      'Specifies instructions describing a party change primitive event.',
    type: {
      blueId: '6ExYXjmvyeVTNcjUV1RhKjrEdJZrXuqeMggJ4UV4BiDX',
    },
  },
  quantityChange: {
    description:
      'Specifies instructions describing an quantity change primitive event.',
    type: {
      blueId: '5b6HW7a1ekzpFv4yM48pejFPmaWgcnYYnPgwgiXz8cgk',
    },
  },
  reset: {
    description: 'Specifies instructions describing a reset event.',
    type: {
      blueId: 'CGgHYqeKaTiPo5dk5t6JAnpqatYqufkEN4kTzTqXnZJ4',
    },
  },
  split: {
    description:
      'Specifies instructions to split a trade into multiple branches.',
    type: {
      blueId: 'this#0',
    },
  },
  stockSplit: {
    description:
      'Specifies inputs needed to process a Stock Split business event.',
    type: {
      blueId: 'FzQcp26M2wWMZ8oAGjQMCQdvRGbamTTNF788oeS8mRAo',
    },
  },
  termsChange: {
    description:
      'Specifies instructions describing a terms change primitive event.',
    type: {
      blueId: '9RwGQUii5VWniPgSYepeWwC1kxvZFDkzF6A5wK9ESXLW',
    },
  },
  transfer: {
    description:
      'Specifies instructions describing a transfer primitive event.',
    type: {
      blueId: 'CJvucYnLjJ6YQyYuspTnZJGLBaDpLV8VYMdDgadAmjNF',
    },
  },
  valuation: {
    description: 'Specifies inputs needed to process an update of a valuation.',
    type: {
      blueId: '8ZzaFzKBw64vzQDiMvQmnvkqQceABGeE2Tg7Hv49brUQ',
    },
  },
} as const;
