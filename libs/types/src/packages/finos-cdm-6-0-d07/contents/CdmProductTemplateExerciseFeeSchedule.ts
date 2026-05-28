export const CdmProductTemplateExerciseFeeSchedule = {
  description:
    'A class to define a fee or schedule of fees to be payable on the exercise of an option. This fee may be defined as an amount or a percentage of the notional exercised. As a difference with FpML, it extends the BuyerSeller class.\n',
  feeAmountSchedule: {
    description:
      'The exercise fee amount schedule. The fees are expressed as currency amounts. The currency of the fee is assumed to be that of the notional schedule referenced.\n',
    type: {
      blueId: 'FDhYdNTtaLCVNSezF95Ys51ECzH3L89vhhaxYFDFUP6w',
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
  feeRateSchedule: {
    description:
      'The exercise free rate schedule. The fees are expressed as percentage rates of the notional being exercised. The currency of the fee is assumed to be that of the notional schedule referenced.\n',
    type: {
      blueId: '73UaBEmPjNZQT7mUS7Rdnxb9fLcnfsn84MCkvVALW3vw',
    },
  },
  name: 'cdm/product/template/ExerciseFeeSchedule',
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
