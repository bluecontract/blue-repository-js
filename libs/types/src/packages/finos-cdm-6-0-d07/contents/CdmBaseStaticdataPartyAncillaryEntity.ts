export const CdmBaseStaticdataPartyAncillaryEntity = {
  ancillaryParty: {
    description:
      'Identifies a party via its ancillary role on a transaction (e.g. CCP or DCO through which the trade should be cleared.)\n',
    type: {
      blueId: '6Z3jsP3QVXumTdQMGZVcCDRNn3n62xjfZLNEHaZeDWmb',
    },
  },
  description:
    'Holds an identifier for an ancillary entity, either identified directly via its ancillary role or directly as a legal entity.\n',
  legalEntity: {
    type: {
      blueId: '6NmyTe5CqfuusJQg46VWDV5a5FXqiZnkQmXduwAjC73o',
    },
  },
  name: 'cdm/base/staticdata/party/AncillaryEntity',
} as const;
