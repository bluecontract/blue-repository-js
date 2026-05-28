export const CdmProductCommonSchedulePaymentDateSchedule = {
  description:
    'The payment dates when specified as relative to a set of dates specified somewhere else in the instance document/transaction, e.g. the valuation dates as typically the case for equity swaps, or when specified as a calculation period schedule.\n',
  finalPaymentDate: {
    description:
      'The last payment when specified as an adjustable or relative date, as in the FpML total return construct.',
    type: {
      blueId: '2tGygxV5BThuWavpJ3T6K3Atw5u4bJZT1Wb2Nxk798dd',
    },
  },
  interimPaymentDates: {
    itemType: {
      blueId: 'Cpbn2utZQopvuh7pdxe4hrg9S6CvTTqwa6hLYZRihZRr',
    },
    schema: {
      minItems: {
        type: {
          blueId: '5WNMiV9Knz63B4dVY5JtMyh3FB4FSGqv7ceScvuapdE1',
        },
        value: 0,
      },
    },
    type: {
      blueId: '6aehfNAxHLC1PHHoDr3tYtFH3RWNbiWdFancJ1bypXEY',
    },
  },
  name: 'cdm/product/common/schedule/PaymentDateSchedule',
} as const;
