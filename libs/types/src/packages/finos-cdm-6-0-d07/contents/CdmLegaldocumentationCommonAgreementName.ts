export const CdmLegaldocumentationCommonAgreementName = {
  agreementType: {
    description: 'Specification of the legal agreement type.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'GeHvZrkuseiXsj542Qn9FKQA1nJMimyARrdb5L7wtar2',
    },
  },
  contractualDefinitionsType: {
    description:
      'The definitions such as those published by ISDA that will define the terms of the trade.',
    itemType: {
      blueId: '5CZGuPh2NgVWkxTTTqHn4LykAwKTXqtg83oWxA6HPX8j',
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
  contractualMatrix: {
    description:
      'A reference to a contractual matrix of elected terms/values (such as those published by ISDA) that shall be deemed to apply to the trade. The applicable matrix is identified by reference to a name and optionally a publication date. Depending on the structure of the matrix, an additional term (specified in the matrixTerm element) may be required to further identify a subset of applicable terms/values within the matrix.\n',
    itemType: {
      blueId: 'DqGobrtxaAEaszyaxnf1T8PaYqNexwwc7b6EHDQcFsQG',
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
  contractualTermsSupplement: {
    description:
      'A contractual supplement (such as those published by ISDA) that will apply to the trade.',
    itemType: {
      blueId: '3apKhKP5xQpMoT4sNuUZ78eq9rVCkEASywdq4Fwcq1Pr',
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
  creditSupportAgreementMarginType: {
    description:
      'specifies the type of margin for which a legal agreement is named.',
    type: {
      blueId: 'S4kLcw9up81q3TNVMZRCthznJz71LuEpiPLPWh1MJ87',
    },
  },
  creditSupportAgreementType: {
    description: 'Specification of the credit support agreement type.',
    type: {
      blueId: 'G7K82XJ1MNdo3T8yPiSDcb6H8yyWjbQwdH4WSJGPGWWx',
    },
  },
  description:
    'Specifies the agreement name through an agreement type and optional detailed sub agreement type.',
  masterAgreementType: {
    description: 'Specification of the master agreement type.',
    type: {
      blueId: 'D6dSn6AsPGjD2zwCwNeCcF8gQWc73EsG3MsXx7RRtpHK',
    },
  },
  masterConfirmationAnnexType: {
    description:
      'The type of master confirmation annex executed between the parties.',
    type: {
      blueId: 'Dd2beZG11x8F2zfZyRG7m81qHdArX5iUKEK3RnpUCBiz',
    },
  },
  masterConfirmationType: {
    description:
      'The type of master confirmation executed between the parties.',
    type: {
      blueId: 'H7rMTsaH3T57Fy2L1PGAZycjKRZJrPhoiVWH8wKQZXZB',
    },
  },
  name: 'cdm/legaldocumentation/common/AgreementName',
  otherAgreement: {
    description:
      'Definition of an agreement that is not enumerated in the CDM.',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
