export const CdmLegaldocumentationCommonAgreementName: Record<string, unknown> =
  {
    agreementType: {
      description: 'Specification of the legal agreement type.',
      schema: {
        required: true,
      },
      type: {
        blueId: '1xkXx62AuJPeBWbqXe9my7R6wp5KHPpRYMPgfh4Md8s',
      },
    },
    contractualDefinitionsType: {
      description:
        'The definitions such as those published by ISDA that will define the terms of the trade.',
      itemType: {
        blueId: 'CZWJZLLr3HQs8VCBUxDWXabvSf6Q3319JdxR7Apv4ijg',
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
        blueId: '6jcZ9zLDpCUUHnubcVFKvtCrbSEVir51vkUuHYoQEtTv',
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
        blueId: '3USYNWwBjwfneMFPfLEAygbecRdE9pmiE6VzumZMpdRQ',
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
        blueId: '9z1L9Ava1wYq6jxK5Q25w3DTwEhKhZHbY9XE9NZCutvJ',
      },
    },
    creditSupportAgreementType: {
      description: 'Specification of the credit support agreement type.',
      type: {
        blueId: '73DfnZhYH3dTmicn8zMHsthj9qQ6K9XEB5KLdtiJSK7u',
      },
    },
    description:
      'Specifies the agreement name through an agreement type and optional detailed sub agreement type.',
    masterAgreementType: {
      description: 'Specification of the master agreement type.',
      type: {
        blueId: 'DkpHjXSPYeeAymNJRnod9AFWqxCfj21de5396nJX3jb5',
      },
    },
    masterConfirmationAnnexType: {
      description:
        'The type of master confirmation annex executed between the parties.',
      type: {
        blueId: 'Et7RmFhXC1S5FYbAYAkgpkUfwspKqhDrsG1K89ev7DVu',
      },
    },
    masterConfirmationType: {
      description:
        'The type of master confirmation executed between the parties.',
      type: {
        blueId: 'HaEz2HuxrPwUkAPyfLmet7k7WuJfH6KjErdWuSXuJE71',
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
