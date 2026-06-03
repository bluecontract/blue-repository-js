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
      blueId: '2Dr79mc7tDo84pCgLDhmSAuay1naC42UUovCTcaMjY5R',
    },
  },
  interimPaymentDates: {
    itemType: {
      blueId: '4EkR94oSN87arjWhzEQUZELGM8at9SvDoSZ3LKbE12sg',
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
