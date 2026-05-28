export const CdmLegaldocumentationCommonAddressForNotices = {
  additionalNotices: {
    description:
      'The optional specification of additional information when a party requires notices to be delivered to more than one address.\n',
    itemType: {
      blueId: '9bBnotjYVoTpiPp618XfsvChy9sMkorNRd8X1hGQVM7o',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'Specification of the address and other details for notices.',
  name: 'cdm/legaldocumentation/common/AddressForNotices',
  primaryNotices: {
    description: 'Specification of primary notice details',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2SCDqYNfqg2Ef6R5QB9F1V7RLuuBbGUCoc6LnFrM1jwp',
    },
  },
} as const;
