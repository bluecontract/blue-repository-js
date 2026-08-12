export const CdmProductCommonScheduleObservationSchedule: Record<
  string,
  unknown
> = {
  dateAdjustments: {
    description:
      'The business day convention and financial business centers used for adjusting the date if it would otherwise fall on a day that is not a business date in the specified business centers.\n',
    type: {
      blueId: 'AKAczd79wtoD2Vt7VjdFdnWeacw86mQTVeLcyS9SWFZz',
    },
  },
  description:
    'Specifies a single date on which market observations take place and specifies optional associated weighting.',
  name: 'cdm/product/common/schedule/ObservationSchedule',
  observationDate: {
    description:
      'Specifies an adjusted or unadjusted date for a market observation.',
    itemType: {
      blueId: 'JDFk4bjDaXiaZiEkLkoPoa66bJWLrnTJB59D2KofE1yE',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
