export const CdmEventCommonContractDetails: Record<string, unknown> = {
  description:
    'Defines specific attributes that relate to contractual details of trades.',
  documentation: {
    description:
      'Represents the legal document(s) that governs a trade and associated contractual product terms, either as a reference to such documents when specified as part of the CDM, or through identification of some of the key terms of those documents, such as the type of document, the document identifier, the publisher, the document vintage and the agreement date.\n',
    itemType: {
      blueId: '9LAToUm7ugSfrCZWL6KmTwi7jAEoXH8TcNNGxr34YvFc#0',
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
      blueId: 'FPz2gxL3hhBbrKzsyDHCfd6NPDNRZN4HckQY4e1gj5u9',
    },
  },
  name: 'cdm/event/common/ContractDetails',
};
