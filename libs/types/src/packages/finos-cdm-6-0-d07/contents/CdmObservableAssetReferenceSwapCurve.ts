export const CdmObservableAssetReferenceSwapCurve = {
  description:
    'A complex type used to specify the option and convertible bond option strike when expressed in reference to a swap curve.\n',
  makeWholeAmount: {
    description:
      'Amount to be paid by the buyer of the option if the option is exercised prior to the Early Call Date. (The market practice in the convertible bond option space being that the buyer should be penalised if he/she exercises the option early on.)\n',
    type: {
      blueId: '5N7r2T8zJNb9icnFAz3pNxwh7pMydKvTZyuGcLFAC4Jd',
    },
  },
  name: 'cdm/observable/asset/ReferenceSwapCurve',
  swapUnwindValue: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'C9EPdpPrzh5V9xD3tEvsVVTXiTnJY6xu9LYzmuhxErxD',
    },
  },
} as const;
