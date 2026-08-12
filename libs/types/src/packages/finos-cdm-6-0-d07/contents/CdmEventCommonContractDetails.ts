export const CdmEventCommonContractDetails: Record<string, unknown> = {
  description:
    'Defines specific attributes that relate to contractual details of trades.',
  documentation: {
    description:
      'Represents the legal document(s) that governs a trade and associated contractual product terms, either as a reference to such documents when specified as part of the CDM, or through identification of some of the key terms of those documents, such as the type of document, the document identifier, the publisher, the document vintage and the agreement date.\n',
    itemType: {
      blueId: 'A6CipKeMXZr9PY1uT1iihJg8sjvn1z3pHUPLe9c2aP7a#0',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  governingLaw: {
    description:
      'Represents the law governing the trade and associated contractual product terms.',
    type: {
      blueId: 'ErxQstFSsMK3XKhLkUhVeRYxqEXmnjDnLu9oW144qji1',
    },
  },
  name: 'cdm/event/common/ContractDetails',
};
