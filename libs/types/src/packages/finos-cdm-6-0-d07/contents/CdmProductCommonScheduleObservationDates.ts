export const CdmProductCommonScheduleObservationDates: Record<string, unknown> =
  {
    description:
      'Describes date details for a set of observation dates in parametric or non-parametric form.',
    name: 'cdm/product/common/schedule/ObservationDates',
    observationSchedule: {
      description:
        'Specifies a schedule of dates (non-parametric) on which market observations take place, and allows for the optional definition of weights where applicable.  When no weight is specified, then weight of each date is assumed to be 1.0\n',
      type: {
        blueId: 'uAf3YUcjjEv6dWvvFKXj7tGWN2iYXUocYm17tdsVbyX',
      },
    },
    parametricDates: {
      description:
        'Specifies parametric terms to determine which days within a given calculation period the price would be observed. Typically associated with Commodities.\n',
      type: {
        blueId: 'BZaLBY48LVb4VwEue2bkVqqdLay2ixteJueEiGUx4bWC',
      },
    },
    periodicSchedule: {
      description:
        'Specifies the date range and frequency on which market observations take place.  Weights can be assigned to dates in the schedule by assigning the weight and corresponding observationReference in the observationSchedule.\n',
      type: {
        blueId: 'BzeLMQ2szfXctEZbXkHo6YK8X9oAyGG7RMSQ8DefBrFB',
      },
    },
  };
