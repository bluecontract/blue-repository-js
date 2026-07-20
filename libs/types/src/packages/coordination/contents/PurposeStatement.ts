export const PurposeStatement: Record<string, unknown> = {
  description:
    'One participant-visible purpose statement. It may describe an authorized representative role, an intended request pattern and response operation, or a simple non-provider role such as observing. Purpose does not grant authority.\n',
  event: {
    description:
      'Optional request event type or pattern the participant intends to handle.',
  },
  name: 'Purpose Statement',
  onBehalfOf: {
    description:
      'Optional authority explaining whom the participant represents. A mandate-backed purpose uses Mandate/Mandate Authority, which includes the represented actor and mandate.\n',
    type: {
      blueId: '5BrNKcZDq6q4UY1jQpjyeFjbTV6rxVKM9qNL5xzGMZRW',
    },
  },
  respondsWith: {
    description:
      'Optional operation selectors the participant may use in response.',
    itemType: {
      blueId: 'Be766kx7kqFYGf96VtAc8Weofb3xkCRUTxSDVd317S2G',
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  summary: {
    description:
      "Optional human-readable explanation of the participant's purpose.",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
