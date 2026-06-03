export const CdmEventCommonReset: Record<string, unknown> = {
  averagingMethodology: {
    description:
      'Identifies the aggregation method to use in the case where multiple observations are used to compute the reset value and the method is not defined in a payout.\n',
    type: {
      blueId: 'G81eqYsDuMYSpYk1hESW7JLhMtsEbDs8dVTux7zmXLUZ',
    },
  },
  description:
    'Defines the reset value or fixing value produced in cashflow calculations, during the life-cycle of a financial instrument. The reset process defined in Create_Reset function joins product definition details with observations to compute the reset value.\n',
  name: 'cdm/event/common/Reset',
  observations: {
    description:
      'Represents an audit of the observations used to produce the reset value. If multiple observations were necessary to produce the reset value, the aggregation method should be defined on the payout.\n',
    itemType: {
      blueId: 'A2eu6mCquL2q8sKhpvBAfkp3b6uAG8GdE22hHTvvQEMi',
    },
    schema: {
      minItems: 1,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  rateRecordDate: {
    description:
      "Specifies the 'Rate Record Day' for a Fallback rate.  Fallback rate fixing processes typically set the fixing rate in arrears, i.e., the Fallback Rate corresponding to a Rate Record Date is set at the end of the interest accural period.  When this applies, Reset->resetDate occurs at the end of the interest period, and the Reset->rateRecordDate occurs near the start of the interest period.  The Reset->rateRecordDate and Reset->observations->observationIdentifier->observationDate will differ if a Fallback rate is unavailable on the Rate Record Date, and the latest previous available rate is used as the observation.\n",
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  resetDate: {
    description: 'Specifies the date on which the reset occurred.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  resetValue: {
    description:
      'Specifies the reset or fixing value. The fixing value could be a cash price, interest rate, or other value.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GLmQaa2vVZKjaht1sNMcUL55xfAgWQxpj5ENxwvVRvsm',
    },
  },
};
