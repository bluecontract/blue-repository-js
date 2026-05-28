export const CdmObservableEventDeterminationMethodology = {
  averagingMethod: {
    description:
      'Specifies enumerations for the type of averaging calculation.',
    type: {
      blueId: '4W3FMfAf11hDkmCcU5z9e73aZtzoh9ZyM9gN7himsoy2',
    },
  },
  description:
    'Specifies the method according to which an amount or a date is determined.',
  determinationMethod: {
    description:
      'Represents a more granular dimention of observation. Typically relevent for resolving a unique equity price, which can be expressed as trade-weighted or volume-weighted averages.\n',
    type: {
      blueId: '3y75YW3Xvg26b63Etnyf7EmxBfhFMUEgAhimCGQ2jyab',
    },
  },
  name: 'cdm/observable/event/DeterminationMethodology',
} as const;
