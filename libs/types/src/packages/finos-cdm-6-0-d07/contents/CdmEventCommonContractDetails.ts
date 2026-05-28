export const CdmEventCommonContractDetails = {
  description:
    'Defines specific attributes that relate to contractual details of trades.',
  documentation: {
    description:
      'Represents the legal document(s) that governs a trade and associated contractual product terms, either as a reference to such documents when specified as part of the CDM, or through identification of some of the key terms of those documents, such as the type of document, the document identifier, the publisher, the document vintage and the agreement date.\n',
    itemType: {
      blueId: 'wvWoY9SJeRuG4p44dmwhpRcK5q7gCLULWqjwhDHDWbM#0',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  governingLaw: {
    description:
      'Represents the law governing the trade and associated contractual product terms.',
    type: {
      blueId: 'EvqvkLHSgg23hZpBiCkngAjwG8xuBKGiDCpbDgMpS97G',
    },
  },
  name: 'cdm/event/common/ContractDetails',
} as const;
