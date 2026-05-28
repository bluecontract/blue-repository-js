export const CdmProductTemplateExerciseFee = {
  description:
    'A class defining the fee payable on exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.\n',
  feeAmount: {
    description:
      'The amount of fee to be paid on exercise. The fee currency is that of the referenced notional.',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  feePaymentDate: {
    description:
      'The date on which exercise fee(s) will be paid. It is specified as a relative date.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2wAd2mDukRH6r2YEZ4kU9e1fcUYpGHT8ZJEwFZFkKaCL',
    },
  },
  feeRate: {
    description:
      'A fee represented as a percentage of some referenced notional. A percentage of 5% would be represented as 0.05.\n',
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/template/ExerciseFee',
  notionalReference: {
    description:
      'A pointer style reference to the associated notional schedule defined elsewhere in the document.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'B6z4sPE6mbrDKZ212dEzdy8bC6F5DNgR8Eh4KK623JA',
    },
  },
  payer: {
    description:
      'Specifies the counterparty responsible for making the payments defined by this structure.  The party is one of the two principal parties to the transaction.\n',
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
  receiver: {
    description:
      'Specifies the party that receives the payments corresponding to this structure.  The party is one of the two counterparties to the transaction.\n',
    type: {
      blueId: '6x12g8enT8MoRfSx5A65GDeBhgNsaewRCdXG5hsioGmL',
    },
  },
} as const;
