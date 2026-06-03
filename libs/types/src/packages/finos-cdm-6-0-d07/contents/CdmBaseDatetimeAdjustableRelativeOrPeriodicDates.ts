export const CdmBaseDatetimeAdjustableRelativeOrPeriodicDates: Record<
  string,
  unknown
> = {
  adjustableDates: {
    description:
      'A series of dates that shall be subject to adjustment if they would otherwise fall on a day that is not a business day in the specified business centers, together with the convention for adjusting the date.\n',
    type: {
      blueId: '5JcKEFUStAenXhdmeTHE6nvpuhEjPvsvuge4TX2AuQrA',
    },
  },
  description:
    'A class giving the choice between defining a series of dates as an explicit list of dates together with applicable adjustments or as relative to some other series of (anchor) dates, or as a calculation period schedule.\n',
  name: 'cdm/base/datetime/AdjustableRelativeOrPeriodicDates',
  periodicDates: {
    description: 'A calculation period schedule.',
    type: {
      blueId: 'JBENwei996PNTBkNZUR1ojomCwz48ULaZEJoeaXxukmT',
    },
  },
  relativeDates: {
    description:
      'A series of dates specified as some offset to another series of dates (the anchor dates).',
    type: {
      blueId: 'DXynKUQNFZU7oUmvsh7mUrjs7JL5RKXrrmkH9hZr99CL',
    },
  },
};
