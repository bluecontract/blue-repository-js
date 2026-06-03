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
      blueId: '5fy8DQMQDgMbPNnMB9zmKJVXYJWdVuBKFNuYz87LZ6S9',
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
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
  name: 'cdm/event/common/CreditEvent',
  publiclyAvailableInformation: {
    description:
      'A public information source, e.g. a particular newspaper or electronic news service, that may publish relevant information used in the determination of whether or not a credit event has occurred.\n',
    itemType: {
      blueId: '4anwVBorXr81GoC4Wkf4trYWror3mSXbzukXdYgwmG7N',
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
      blueId: '3eDfhc11LMfKiQsRKqD5mkN3csaNKJ4Yay8qPTE3sM5f',
    },
  },
};
