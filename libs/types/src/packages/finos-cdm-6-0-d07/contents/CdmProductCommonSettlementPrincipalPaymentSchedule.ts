export const CdmProductCommonSettlementPrincipalPaymentSchedule: Record<
  string,
  unknown
> = {
  description:
    'Describe dates schedules for Principal Exchanges and related role of the parties when known.',
  finalPrincipalPayment: {
    description: 'Principal Payment at Trade maturity',
    type: {
      blueId: '9XUMDnSJjmK5Kqp5BL268vZoXGmEQAMCFTKbJVVwuPbB',
    },
  },
  initialPrincipalPayment: {
    description: 'Principal Payment made at Trade inception.',
    type: {
      blueId: '9XUMDnSJjmK5Kqp5BL268vZoXGmEQAMCFTKbJVVwuPbB',
    },
  },
  intermediatePrincipalPayment: {
    description:
      'Principal Payment as part of the Trade lifecycle e.g. as part of notional reset adjustements in a Cross Currency Swap with a varying notional leg.\n',
    type: {
      blueId: '4EkR94oSN87arjWhzEQUZELGM8at9SvDoSZ3LKbE12sg',
    },
  },
  name: 'cdm/product/common/settlement/PrincipalPaymentSchedule',
};
