export const CdmProductCommonSettlementPrincipalPaymentSchedule = {
  description:
    'Describe dates schedules for Principal Exchanges and related role of the parties when known.',
  finalPrincipalPayment: {
    description: 'Principal Payment at Trade maturity',
    type: {
      blueId: '9cWWHV5DRe4SuejnEf6PBEsFWjw5RA8u3n2yKvLwXzMS',
    },
  },
  initialPrincipalPayment: {
    description: 'Principal Payment made at Trade inception.',
    type: {
      blueId: '9cWWHV5DRe4SuejnEf6PBEsFWjw5RA8u3n2yKvLwXzMS',
    },
  },
  intermediatePrincipalPayment: {
    description:
      'Principal Payment as part of the Trade lifecycle e.g. as part of notional reset adjustements in a Cross Currency Swap with a varying notional leg.\n',
    type: {
      blueId: 'Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPaymentSchedule',
} as const;
