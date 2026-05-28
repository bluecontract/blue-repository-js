export const CdmEventCommonTransfer = {
  asset: {
    description:
      'Represents the object that is subject to the transfer, it could be an asset or a reference.',
    type: {
      blueId: 'B3bsNNAr8QJpJA8r84kgZrHLE5PZREBGxXWYJdtaDRJ7',
    },
  },
  description:
    'Defines the movement of an Asset (eg cash, securities or commodities) between two parties on a date.',
  identifier: {
    description: 'Represents a unique reference to the transfer.',
    itemType: {
      blueId: '3eTtCxBt24us9TCBr18msWJzdN7HeDk1d6J1ycAcQ5YJ',
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
  name: 'cdm/event/common/Transfer',
  payerReceiver: {
    description: 'Represents the parties to the transfer and their role.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '5jMMKaokSyc3P5cYsiGHgYgok3sYf3J1f3Cq4Ue2LX4C',
    },
  },
  quantity: {
    description:
      'Represents the amount of the asset to be transferred. The cashflow amount is always a positive number, as the cashflow direction is implied by the payer/receiver attribute.\n',
    type: {
      blueId: 'BbfKyr9mpdQ8cuNvCP78fS2o4Rc7gQZ1GdcbnyD6grzK',
    },
  },
  resetOrigin: {
    description:
      'Represents the reset and observation values that were used to determine the transfer amount.',
    type: {
      blueId: '14sVVTzSacMzHornDaXpUxvVuwj3EZYsDLgepvsmbGW7',
    },
  },
  settlementDate: {
    description: 'Represents the date on which the transfer to due.',
    type: {
      blueId: 'BwTCpPFhSqEbgjkUmssmzp1ig5hb3QSdGhqroiTDsJvJ',
    },
  },
  settlementOrigin: {
    description:
      'Represents the origin to the transfer as a reference for lineage purposes, whether it originated from trade level settlement terms or from payment terms on an economic payout.\n',
    type: {
      blueId: '529d4eeRPqjy1E5t4zWJpWVA2HKzpHHLCXrsg3D3pMZQ',
    },
  },
  transferExpression: {
    description:
      'Specifies a transfer expression (cash price, performance amount, scheduled payment amount, etc.) to define the nature of the transfer amount and its source.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FcygtYNeeqry73mriebsFBhtXNtXX2ULZyMgcESYBSyY',
    },
  },
} as const;
