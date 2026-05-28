export const CdmLegaldocumentationCommonAgreementTerms = {
  agreement: {
    description:
      'Specification of the standard set of terms that define a legal agreement.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EwFdHo4Jxu4HXFdAczFttPDMuiJhjdR3ukBBNCTdxBUJ',
    },
  },
  clauseLibrary: {
    description:
      'Specification of whether the agreement terms have been negotiated using the clause library methodology.',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  counterparty: {
    description:
      'Specification of the roles of the counterparties to the agreement.',
    itemType: {
      blueId: '3xDGPtjud4dCVNF9Swm1X7WoCse6gMziwHGvUnp1h3EK',
    },
    schema: {
      maxItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 2,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  description: 'Specification of the content of a legal agreement.',
  name: 'cdm/legaldocumentation/common/AgreementTerms',
} as const;
