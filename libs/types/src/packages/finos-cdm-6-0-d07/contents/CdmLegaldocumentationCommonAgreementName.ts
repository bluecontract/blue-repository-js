export const CdmLegaldocumentationCommonAgreementName: Record<string, unknown> =
  {
    agreementType: {
      description: 'Specification of the legal agreement type.',
      schema: {
        required: true,
      },
      type: {
        blueId: 'G98oMcFFcwapftpN3NbSePJTeafVqJgbP2ZJKGAWijZE',
      },
    },
    contractualDefinitionsType: {
      description:
        'The definitions such as those published by ISDA that will define the terms of the trade.',
      itemType: {
        blueId: 'CftZdiJyxaHVcunERbr8EtHErVHhgbCsTvUQH5YbLAXL',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    contractualMatrix: {
      description:
        'A reference to a contractual matrix of elected terms/values (such as those published by ISDA) that shall be deemed to apply to the trade. The applicable matrix is identified by reference to a name and optionally a publication date. Depending on the structure of the matrix, an additional term (specified in the matrixTerm element) may be required to further identify a subset of applicable terms/values within the matrix.\n',
      itemType: {
        blueId: 'CEyrkJUT8HLojysAQjUReMYLQCgHmBX4VUxU91TJu8uA',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    contractualTermsSupplement: {
      description:
        'A contractual supplement (such as those published by ISDA) that will apply to the trade.',
      itemType: {
        blueId: 'GPjWcB5kAK6o6LyYVxoBgAHdEXtqLx1cmJPtvswu4BU9',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    creditSupportAgreementMarginType: {
      description:
        'specifies the type of margin for which a legal agreement is named.',
      type: {
        blueId: 'Ce3ciQcLKDEJNBNLKJ7ZQ1woFjqogy7nsbLP99TxETXf',
      },
    },
    creditSupportAgreementType: {
      description: 'Specification of the credit support agreement type.',
      type: {
        blueId: '4meuCktw1FU4RPxCQDZJiER7pwjt3F4qWFP4AeaGwPM2',
      },
    },
    description:
      'Specifies the agreement name through an agreement type and optional detailed sub agreement type.',
    masterAgreementType: {
      description: 'Specification of the master agreement type.',
      type: {
        blueId: 'AMab7AVqN4nc3s5D6FBKRbSLj8EYaF9ppAqRbTodszbt',
      },
    },
    masterConfirmationAnnexType: {
      description:
        'The type of master confirmation annex executed between the parties.',
      type: {
        blueId: 'BpZYvuC7zpYyf3krdVjDee54WGnxCiGoGoGutTcy8rUj',
      },
    },
    masterConfirmationType: {
      description:
        'The type of master confirmation executed between the parties.',
      type: {
        blueId: 'EMyh5oCQ6YLTistdrYkpVkvDXxrQh4ahrj3UkbNde95t',
      },
    },
    name: 'cdm/legaldocumentation/common/AgreementName',
    otherAgreement: {
      description:
        'Definition of an agreement that is not enumerated in the CDM.',
      type: {
        blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
      },
    },
  };
