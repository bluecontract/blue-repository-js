export const CdmEventCommonResetInstruction: Record<string, unknown> = {
  description:
    'Defines the information needed to create a Reset Business Event.',
  name: 'cdm/event/common/ResetInstruction',
  payout: {
    itemType: {
      blueId: 'B5Jakr9Bd7eaMZzThRtLAaP1ZnjC3yngwZjL4GXVZW7P',
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
    description: 'Specifies the date on which the reset is occuring.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
