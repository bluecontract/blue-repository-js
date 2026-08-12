export const CdmProductCommonSettlementPrincipalPaymentSchedule: Record<
  string,
  unknown
> = {
  description:
    'Describe dates schedules for Principal Exchanges and related role of the parties when known.',
  finalPrincipalPayment: {
    description: 'Principal Payment at Trade maturity',
    type: {
      blueId: 'A6P3sUb9TyTHkzLFZSbiu6Ehk3sCead9tQVLZBqrBdAL',
    },
  },
  initialPrincipalPayment: {
    description: 'Principal Payment made at Trade inception.',
    type: {
      blueId: 'A6P3sUb9TyTHkzLFZSbiu6Ehk3sCead9tQVLZBqrBdAL',
    },
  },
  intermediatePrincipalPayment: {
    description:
      'Principal Payment as part of the Trade lifecycle e.g. as part of notional reset adjustements in a Cross Currency Swap with a varying notional leg.\n',
    type: {
      blueId: 'A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPaymentSchedule',
};
