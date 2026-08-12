export const CdmBaseStaticdataPartyAncillaryParty: Record<string, unknown> = {
  description:
    'Defines an ancillary role enumerated value with an associated party reference. The product is agnostic to the actual parties involved in the transaction, with the party references abstracted away from the product definition and replaced by the AncillaryRoleEnum. The AncillaryRoleEnum can then be positioned in the product and this AncillaryParty type, which is positioned outside of the product definition, allows the AncillaryRoleEnum to be associated with an actual party reference.\n',
  name: 'cdm/base/staticdata/party/AncillaryParty',
  onBehalfOf: {
    description:
      'Optionally specifies the counterparty that the ancillary party is acting on behalf of.',
    type: {
      blueId: '7qRfgFBAefYQ37ztmK2dW9i4twZzBjKcQiHPeHrcRtYw',
    },
  },
  partyReference: {
    description:
      'Specifies the party, or parties, associated to the ancillary role.',
    itemType: {
      blueId: 'Doqu2fdYiHUWbSaMDHL5YoyEeuzbTrSjqbT1ZLqmB1Cr',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  role: {
    description:
      'Specifies the AncillaryRoleEnum that is associated to the party reference. An ancillary party is any involved party that is not one of the two principal parties to the transaction.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '5UenXSd178j4ogWvtPBmvmYtMB2vnBUbSZpAKNkbGcuf',
    },
  },
};
