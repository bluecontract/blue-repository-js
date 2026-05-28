export const CdmProductCommonSettlementSettlementBase = {
  description: 'A base class to be extended by the SettlementTerms class.',
  name: 'cdm/product/common/settlement/SettlementBase',
  settlementCentre: {
    description:
      'Optional settlement centre as an enumerated list: Euroclear, Clearstream.\n',
    type: {
      blueId: 'EdmhbyH7xsBGyqV7bbekHDFWNScUciKyPKEuEsTbVHam',
    },
  },
  settlementCurrency: {
    description:
      'The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
    type: {
      blueId: 'F5GfdsSNcjLAm9anbfMQqxdxAFonErhU5UXFbQzq1zXY',
    },
  },
  settlementDate: {
    description:
      'The date on which the settlement amount will be paid, subject to adjustment in accordance with any applicable business day convention. This component would not be present for a mandatory early termination provision where the cash settlement payment date is the mandatory early termination date.\n',
    type: {
      blueId: 'BpU6xJSR2z5NwXmV5bD8YQ9JC6fwfmHdoqNcxYGeucmQ',
    },
  },
  settlementProvision: {
    description:
      'Optionally defines the parameters that regulate a settlement.',
    type: {
      blueId: '4ZRat5NKcUmJRnQwyF3q1SUzsaJbhHUXrEPGq7p8SRcj',
    },
  },
  settlementType: {
    description:
      'Whether the settlement will be cash, physical, by election, ...',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '6PaHnEA3rYitZ2JKHenwQog3g7ZAfxruJMGQcpWCEDFK',
    },
  },
  standardSettlementStyle: {
    description: 'Settlement Style.',
    type: {
      blueId: '7YFjahYdHYHERXt79M9mLJ1qKNxQPm89ieLFXUZ2KcwA',
    },
  },
  transferSettlementType: {
    description:
      'The qualification as to how the transfer will settle, e.g. a DvP settlement.',
    type: {
      blueId: 'Dh5YZ8UboebnzAaX4XPDYtGbPzNfaHDzsrZX9Nocp8CM',
    },
  },
} as const;
