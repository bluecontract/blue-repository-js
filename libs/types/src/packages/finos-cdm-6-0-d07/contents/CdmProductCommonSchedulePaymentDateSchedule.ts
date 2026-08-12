export const CdmProductCommonSchedulePaymentDateSchedule: Record<
  string,
  unknown
> = {
  description:
    'The payment dates when specified as relative to a set of dates specified somewhere else in the instance document/transaction, e.g. the valuation dates as typically the case for equity swaps, or when specified as a calculation period schedule.\n',
  finalPaymentDate: {
    description:
      'The last payment when specified as an adjustable or relative date, as in the FpML total return construct.',
    type: {
      blueId: 'GW4fUG5i4g68v2eQEznuefGCSUPiwaHXpoVmU4ASwx29',
    },
  },
  interimPaymentDates: {
    itemType: {
      blueId: 'A5fbgqJ72K7pbNNCrmP9z1uJjRfJjx4z6Bav92ZY3iMs',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/product/common/schedule/PaymentDateSchedule',
};
