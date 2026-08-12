export const CdmEventWorkflowCreditLimitUtilisationPosition: Record<
  string,
  unknown
> = {
  global: {
    description:
      'Global credit limit utilisation amount, agnostic of long/short position direction.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  longPosition: {
    description: 'Credit limit utilisation attributable to long positions.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
  name: 'cdm/event/workflow/CreditLimitUtilisationPosition',
  shortPosition: {
    description: 'Credit limit utilisation attributable to short positions.',
    type: {
      blueId: '9eWaHYz2vKrFofdHTHAizNNu8xP6QE3WQ5y7DGrGZvyJ',
    },
  },
};
