export const CdmObservableEventCreditEventNotice: Record<string, unknown> = {
  businessCenter: {
    description:
      'Inclusion of this business center element implies that Greenwich Mean Time in Section 3.3 of the 2003 ISDA Credit Derivatives Definitions is replaced by the local time of the city indicated by the businessCenter element value.\n',
    type: {
      blueId: 'Ftpos6LCMk31PB3e4E1siiMshU1M88BMeTNK4yRypXyL',
    },
  },
  name: 'cdm/observable/event/CreditEventNotice',
  notifyingParty: {
    description:
      'The notifying party is the party that notifies the other party when a credit event has occurred by means of a credit event notice. If more than one party is referenced as being the notifying party then either party may notify the other of a credit event occurring. ISDA 2003 Term: Notifying Party.\n',
    itemType: {
      blueId: '6RRexSdxduLUUJjoAGhNuhXszw24mwyTFrHtwAqU2SDG',
    },
    schema: {
      maxItems: 2,
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  publiclyAvailableInformation: {
    description:
      'A specified condition to settlement. Publicly available information means information that reasonably confirms any of the facts relevant to determining that a credit event or potential repudiation/moratorium, as applicable, has occurred. The ISDA defined list (2003) is the market standard and is considered comprehensive, and a minimum of two differing public sources must have published the relevant information, to declare a Credit Event. ISDA 2003 Term: Notice of Publicly Available Information Applicable.\n',
    type: {
      blueId: 'EY9iPDd22LwArn4MV9fUHUqkd2gX1guSkAntckHs1xYa',
    },
  },
};
