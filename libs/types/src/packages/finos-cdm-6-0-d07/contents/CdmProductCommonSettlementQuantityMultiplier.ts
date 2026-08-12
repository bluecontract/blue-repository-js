export const CdmProductCommonSettlementQuantityMultiplier: Record<
  string,
  unknown
> = {
  description:
    'Class to specify a mechanism for a quantity to be set as a multiplier to another (reference) quantity, based on a price observation. At the moment this class only supports FX or Equity-linked notional and re-uses existing building blocks for those 2 cases, until such time when component can be made more generic. This captures the case of resetting cross-currency swaps and resetting equity swaps.\n',
  fxLinkedNotionalSchedule: {
    description:
      'Multiplier specified as an FX-linked schedule, e.g. for a resetting cross-currency swap..',
    type: {
      blueId: 'C8dYtpaC5sApKFHdfeTUgJGSS65ZpXVFkVQe4mhNjoUi',
    },
  },
  multiplierValue: {
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/product/common/settlement/QuantityMultiplier',
};
