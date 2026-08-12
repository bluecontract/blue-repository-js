export const CdmProductCommonSettlementSettlementBase: Record<string, unknown> =
  {
    description: 'A base class to be extended by the SettlementTerms class.',
    name: 'cdm/product/common/settlement/SettlementBase',
    settlementCentre: {
      description:
        'Optional settlement centre as an enumerated list: Euroclear, Clearstream.\n',
      type: {
        blueId: 'HNVHhf8uCMHeERTXMbuFjAfwGfoW74SpmFR9dZx4RuLJ',
      },
    },
    settlementCurrency: {
      description:
        'The settlement currency is to be specified when the Settlement Amount cannot be known in advance. The list of valid currencies is not presently positioned as an enumeration as part of the CDM because that scope is limited to the values specified by ISDA and FpML. As a result, implementers have to make reference to the relevant standard, such as the ISO 4217 standard for currency codes.\n',
      type: {
        blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
      },
    },
    settlementDate: {
      description:
        'The date on which the settlement amount will be paid, subject to adjustment in accordance with any applicable business day convention. This component would not be present for a mandatory early termination provision where the cash settlement payment date is the mandatory early termination date.\n',
      type: {
        blueId: '3UpG3PQhfhG9bmZnQgsoceUaLRc1gSZXPo86uTkWL5xo',
      },
    },
    settlementProvision: {
      description:
        'Optionally defines the parameters that regulate a settlement.',
      type: {
        blueId: '9DLtb1CTwAuNnZMocFezNkQ1BC4LYa3VariRYDN18Jtc',
      },
    },
    settlementType: {
      description:
        'Whether the settlement will be cash, physical, by election, ...',
      schema: {
        required: true,
      },
      type: {
        blueId: 'EpkUabFqidXXDAgkraPb7Y28utGyKp61fnqpNV6Zo54C',
      },
    },
    standardSettlementStyle: {
      description: 'Settlement Style.',
      type: {
        blueId: '8fCWUFrCX8KP5KwBXgYptAmt5GoD1E1iS7wVQzGcuQYR',
      },
    },
    transferSettlementType: {
      description:
        'The qualification as to how the transfer will settle, e.g. a DvP settlement.',
      type: {
        blueId: 'GmLJv8qeAX5rVQDVXK5qq3o8no9UgiedzAoY5XuaBDm3',
      },
    },
  };
