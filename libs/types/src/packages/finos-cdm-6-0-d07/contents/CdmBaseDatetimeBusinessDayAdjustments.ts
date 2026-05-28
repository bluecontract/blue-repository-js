export const CdmBaseDatetimeBusinessDayAdjustments = {
  businessCenters: {
    description:
      'The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.\n',
    type: {
      blueId: 'AaeaS3nBkqHVJTRb23iTwYjbMyikRz6mRz7L5FdHczSH',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'EP4PK7ibh1EaWh9sLTjFcwVikiRQECurvR5Nb9ZPbJCs',
    },
  },
  description:
    'A class defining the business day convention and financial business centers used for adjusting any relevant date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
  name: 'cdm/base/datetime/BusinessDayAdjustments',
} as const;
