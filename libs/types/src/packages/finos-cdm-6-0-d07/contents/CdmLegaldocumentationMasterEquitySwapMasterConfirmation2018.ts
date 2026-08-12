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
      blueId: '53mGNaWEbqDyzs1WnqizJcci5WSeG5YDV6e97svgRLve',
    },
  },
  linearInterpolationElection: {
    description:
      "Per Part 1 Section 3, 'Floating Obligations', of the 2018 ISDA CDM Equity Confirmation. Para 3.3",
    schema: {
      required: true,
    },
    type: {
      blueId: '3h1NHQxSYTh9JS13UUBSTJesbdm5xcKkz7jHUTjG4s6f',
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
      blueId: 'AoPSpWFPQFM3y5utQVWc87pnUqdSxGdfQopZXvv1hzoB',
    },
  },
  settlementTerms: {
    description:
      "Per Part 1 Section 8, 'Settlement', of the 2018 ISDA CDM Equity Confirmation for Security Equity Swap",
    schema: {
      required: true,
    },
    type: {
      blueId: 'BRJ2J4zKmK8CLQta8gGcSboyer9Sby49nV8HopjaFM7g',
    },
  },
  typeOfSwapElection: {
    description:
      "Per Part 1 Section 4, 'Dividend Obligations', of the 2018 ISDA CDM Equity Confirmation, Para 4.2 'Dividend Returns'\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '3fgHuNXJoi7veV1sJapyuahexc4gzfBdPJ5JVBdUSiHn',
    },
  },
  valuationDates: {
    description:
      "The parameters used to generate the 'Equity Valuation Dates' schedule, including the Effective Date and Termination Date for the Swap.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: '52VT1GJKNMa3wBqNqgE8GhUTMvm8KG1p7teYbHA7oz8D',
    },
  },
};
