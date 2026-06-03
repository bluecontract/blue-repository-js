export const CdmProductCommonSettlementSettlementBase: Record<string, unknown> =
  {
    description: 'A base class to be extended by the SettlementTerms class.',
    name: 'cdm/product/common/settlement/SettlementBase',
    settlementCentre: {
      description:
        'Optional settlement centre as an enumerated list: Euroclear, Clearstream.\n',
      type: {
        blueId: '645oAr2atS3TekcTBduwAeUSH7aauAokbEg66ZLpz4YE',
      },
    },
    settlementCurrency: {
      description:
        'The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
      type: {
        blueId: 'HTDqFgte5VF88dLHnCZMjvyetfxfTAKxf9r8ciErE7Vg',
      },
    },
    settlementDate: {
      description:
        'The date on which the settlement amount will be paid, subject to adjustment in accordance with any applicable business day convention. This component would not be present for a mandatory early termination provision where the cash settlement payment date is the mandatory early termination date.\n',
      type: {
        blueId: '7Q5F1XxXtAWfQfrSL8T366Bz2JLxc3qFWWnR7Xazhgvx',
      },
    },
    settlementProvision: {
      description:
        'Optionally defines the parameters that regulate a settlement.',
      type: {
        blueId: 'wNGmmHNkPh47VcmdJFAFyWS5mS1W5PvRW9UW2h3YWFW',
      },
    },
    settlementType: {
      description:
        'Whether the settlement will be cash, physical, by election, ...',
      schema: {
        required: true,
      },
      type: {
        blueId: '796x89gqZi8yLKhDwKArGYcCuCbixQw7PQhuDpancqMn',
      },
    },
    standardSettlementStyle: {
      description: 'Settlement Style.',
      type: {
        blueId: '3gvWJxrxUUD4bdYMUZb5GWjJwHqshsA9ncx7VngcWSQG',
      },
    },
    transferSettlementType: {
      description:
        'The qualification as to how the transfer will settle, e.g. a DvP settlement.',
      type: {
        blueId: 'BSQDJMfPWXBaqWYWPJCUYYLzftmLKsUbi3EyLhuh7Mr1',
      },
    },
  };
