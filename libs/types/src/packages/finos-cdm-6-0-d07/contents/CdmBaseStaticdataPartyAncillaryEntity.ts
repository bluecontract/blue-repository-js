export const CdmBaseStaticdataPartyAncillaryEntity: Record<string, unknown> = {
  ancillaryParty: {
    description:
      'Identifies a party via its ancillary role on a transaction (e.g. CCP or DCO through which the trade should be cleared.)\n',
    type: {
      blueId: 'C2Ec7JF7c6QV6kD3Wb7Mtfg9NJ7aemu5KqHaafpZuEvN',
    },
  },
  description:
    'Holds an identifier for an ancillary entity, either identified directly via its ancillary role or directly as a legal entity.\n',
  legalEntity: {
    type: {
      blueId: '6LRw3aCeJHKD7qGzs2HvJDoQiMs8QddUf5wSr4oagtuS',
    },
  },
  name: 'cdm/base/staticdata/party/AncillaryEntity',
};
