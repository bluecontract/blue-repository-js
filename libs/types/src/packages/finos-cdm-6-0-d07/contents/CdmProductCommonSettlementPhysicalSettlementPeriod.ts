export const CdmProductCommonSettlementPhysicalSettlementPeriod = {
  businessDays: {
    description:
      'A number of business days. Its precise meaning is dependant on the context in which this element is used. ISDA 2003 Term: Business Day.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  businessDaysNotSpecified: {
    description:
      'An explicit indication that a number of business days are not specified and therefore ISDA fallback provisions should apply.\n',
    type: {
      blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
    },
  },
  maximumBusinessDays: {
    description:
      'A maximum number of business days. Its precise meaning is dependant on the context in which this element is used. Intended to be used to limit a particular ISDA fallback provision.\n',
    type: {
      blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
    },
  },
  name: 'cdm/product/common/settlement/PhysicalSettlementPeriod',
} as const;
