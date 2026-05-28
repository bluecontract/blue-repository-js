export const CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018 = {
  description:
    'Specification for the General Terms and Relationship Supplement Elections as provided in the 2018 ISDA CDM Equity Confirmation for Security Equity Swap.\n',
  equityCashSettlementDates: {
    description:
      "The parameters used to generate the payment date schedule, relative to the equityCalculationPeriod. Per Part 1 Section 12, 'Definitions', of the 2018 ISDA CDM Equity Confirmation. Para 73\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '913TgdFLeMHEAXnndV1KuUqmoxUtRjXn8X8JRX4n632b',
    },
  },
  linearInterpolationElection: {
    description:
      "Per Part 1 Section 3, 'Floating Obligations', of the 2018 ISDA CDM Equity Confirmation. Para 3.3",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EZCcXSeu6Mk3Bc3Qcno1DBgEKRoJ1xsTQUDczkFSE6g8',
    },
  },
  name: 'cdm/legaldocumentation/master/EquitySwapMasterConfirmation2018',
  pricingMethodElection: {
    description:
      "Per Part 1 Section 5, 'Pricing', of the 2018 ISDA CDM Equity Confirmation, Para 5.1",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7YFwQGbWnfaZ3YgwzGGgdBhyDppvFGTH2LibSGzdhSnH',
    },
  },
  settlementTerms: {
    description:
      "Per Part 1 Section 8, 'Settlement', of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7zkmbj4175pTZ3exYCBnCyVdiSaAT2SEfkxhDTus8iLY',
    },
  },
  typeOfSwapElection: {
    description:
      "Per Part 1 Section 4, 'Dividend Obligations', of the 2018 ISDA CDM Equity Confirmation, Para 4.2 'Dividend Returns'\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4SvjRC1Thybv7EN6BqY9TGmSF2x7zK9ixyYS8UCempKF',
    },
  },
  valuationDates: {
    description:
      "The parameters used to generate the 'Equity Valuation Dates' schedule, including the Effective Date and Termination Date for the Swap.\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '66zVckdam9PFW8teq1v55hAb2SjzvqkkKJKB5VKKrrkT',
    },
  },
} as const;
