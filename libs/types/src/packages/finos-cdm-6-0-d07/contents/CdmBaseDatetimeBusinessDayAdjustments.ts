export const CdmBaseDatetimeBusinessDayAdjustments: Record<string, unknown> = {
  businessCenters: {
    description:
      'The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.\n',
    type: {
      blueId: 'H53mV1d8rMzhefLZH8WzGchozyQA28cbwNpBHGmVA9ti',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'UEYhmdmBmLhrdtL1ThGtACP6Ljtvao5EVBeQdbiB2XJ',
    },
  },
  description:
    'A class defining the business day convention and financial business centers used for adjusting any relevant date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
  name: 'cdm/base/datetime/BusinessDayAdjustments',
};
