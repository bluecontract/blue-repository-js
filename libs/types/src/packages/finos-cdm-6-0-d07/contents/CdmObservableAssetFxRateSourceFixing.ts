export const CdmObservableAssetFxRateSourceFixing = {
  description:
    'Describes a rate source to be fixed and the date the fixing occurs',
  fixingDate: {
    description: 'The date on which the fixing is scheduled to occur.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '4Ro4tKrST2yaBWNytCjLJMhx3DMoAXwqU1W6HBKrnfRn',
    },
  },
  name: 'cdm/observable/asset/FxRateSourceFixing',
  settlementRateSource: {
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'FmLtwXC2QV65Ns3nmhjxLXoKCP4AuGj1rv5iMdcqmUmC',
    },
  },
} as const;
