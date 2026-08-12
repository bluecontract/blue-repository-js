export const CdmBaseDatetimeBusinessDayAdjustments: Record<string, unknown> = {
  businessCenters: {
    description:
      'The business center(s), specified either explicitly or by reference to those specified somewhere else in the instance document.\n',
    type: {
      blueId: 'Ds5a9bChKossVgHEM7Z2TQTCxDXdB2SZhtM9v9Y3mYmM',
    },
  },
  businessDayConvention: {
    description:
      'The convention for adjusting a date if it would otherwise fall on a day that is not a business day.',
    schema: {
      required: true,
    },
    type: {
      blueId: '4nDV142exufoEvXv8wAPT7GVTpvQw7t3yETBpT9G6aWX',
    },
  },
  description:
    'A class defining the business day convention and financial business centers used for adjusting any relevant date if it would otherwise fall on a day that is not a business day in the specified business center.\n',
  name: 'cdm/base/datetime/BusinessDayAdjustments',
};
