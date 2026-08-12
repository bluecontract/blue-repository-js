export const CdmEventCommonCreditEvent: Record<string, unknown> = {
  auctionDate: {
    description: 'The date on which the auction is scheduled to occur.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  creditEventType: {
    description: 'The type of credit event taking place.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'FFZsUQAJXY5cKNYpscUwkrsBEYy2tgseBex1wqNcaERv',
    },
  },
  description: 'Specifies the relevant data regarding a credit event.',
  eventDeterminationDate: {
    description:
      'The date in which the credit event is determined by the Credit Derivatives Determinations Comitee.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  finalPrice: {
    description: 'The final price resulting from the auction.',
    type: {
      blueId: 'D6pT9tDvB6nnaNaPVHodxcm2djqTNykgt6VJoD2uDq4M',
    },
  },
  name: 'cdm/event/common/CreditEvent',
  publiclyAvailableInformation: {
    description:
      'A public information source, e.g. a particular newspaper or electronic news service, that may publish relevant information used in the determination of whether or not a credit event has occurred.\n',
    itemType: {
      blueId: 'HmhKdAbT2MRZUsE7sCtNxWo8eestifsJAK5KCzFN5bn2',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  recoveryPercent: {
    description:
      'The percentage of the original value of the asset affected by the credit event that can be recovered.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  referenceInformation: {
    description:
      'The reference entity, part of a credit basket, impacted by the credit event.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'Aogoj2sCUGRvYLZhVJNntPd3rKjX5XU82C9NYKGNG6EH',
    },
  },
};
