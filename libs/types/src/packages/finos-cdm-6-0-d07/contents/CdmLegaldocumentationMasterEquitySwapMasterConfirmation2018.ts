export const CdmLegaldocumentationMasterEquitySwapMasterConfirmation2018: Record<
  string,
  unknown
> = {
  description:
    'Specification for the General Terms and Relationship Supplement Elections as provided in the 2018 ISDA CDM Equity Confirmation for Security Equity Swap.\n',
  equityCashSettlementDates: {
    description:
      "The parameters used to generate the payment date schedule, relative to the equityCalculationPeriod. Per Part 1 Section 12, 'Definitions', of the 2018 ISDA CDM Equity Confirmation. Para 73\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '23fb9HBYcZQ8enTm83iVQjixyTrHqNc5G1ANtAbB1ixz',
    },
  },
  linearInterpolationElection: {
    description:
      "Per Part 1 Section 3, 'Floating Obligations', of the 2018 ISDA CDM Equity Confirmation. Para 3.3",
    schema: {
      required: true,
    },
    type: {
      blueId: '69SohrhYgsRTiHcPmh9GwadYoxt1kJgmJ3e2nrCajFHt',
    },
  },
  name: 'cdm/legaldocumentation/master/EquitySwapMasterConfirmation2018',
  pricingMethodElection: {
    description:
      "Per Part 1 Section 5, 'Pricing', of the 2018 ISDA CDM Equity Confirmation, Para 5.1",
    schema: {
      required: true,
    },
    type: {
      blueId: 'JAFJ1wyCKHfmK69wvo8tXGepwZYTJ4o37xsdPgsDstzv',
    },
  },
  settlementTerms: {
    description:
      "Per Part 1 Section 8, 'Settlement', of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap",
    schema: {
      required: true,
    },
    type: {
      blueId: '2qfdfn8VYJmiXxmTj9Vwfu1pB3jFJQK9WAShnf8n1r1m',
    },
  },
  typeOfSwapElection: {
    description:
      "Per Part 1 Section 4, 'Dividend Obligations', of the 2018 ISDA CDM Equity Confirmation, Para 4.2 'Dividend Returns'\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'EvqKp8C4TsU58D4ZoFC8ba55Fdq8Qeka9NmEAAuioCk3',
    },
  },
  valuationDates: {
    description:
      "The parameters used to generate the 'Equity Valuation Dates' schedule, including the Effective Date and Termination Date for the Swap.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'UcvnGWBznJQMKxTqZfWEzoJ4bovdXYkn8PTxfrA9Kxt',
    },
  },
};
