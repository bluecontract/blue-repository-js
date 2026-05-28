export const CdmProductCommonScheduleObservationDates = {
  description:
    'Describes date details for a set of observation dates in parametric or non-parametric form.',
  name: 'cdm/product/common/schedule/ObservationDates',
  observationSchedule: {
    description:
      'Specifies a schedule of dates (non-parametric) on which market observations take place, and allows for the optional definition of weights where applicable.  When no weight is specified, then weight of each date is assumed to be 1.0\n',
    type: {
      blueId: '5HyA1BrsbksXL8qZtKjnV98GEFdqbjYkQRaHW2XuXupL',
    },
  },
  parametricDates: {
    description:
      'Specifies parametric terms to determine which days within a given calculation period the price would be observed. Typically associated with Commodities.\n',
    type: {
      blueId: 'CnFPWcJf9xSTq4FLwvkKAXcrxAjrdDmjq7gzPjKyC2MN',
    },
  },
  periodicSchedule: {
    description:
      'Specifies the date range and frequency on which market observations take place.  Weights can be assigned to dates in the schedule by assigning the weight and corresponding observationReference in the observationSchedule.\n',
    type: {
      blueId: 'A7n4Qooqj58rSepqdAnqh6w3cUZ2grnNMz4KXt1znNND',
    },
  },
} as const;
