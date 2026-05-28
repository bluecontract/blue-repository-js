export const CdmEventWorkflowCreditLimitUtilisation = {
  description:
    'Credit limit utilisation breakdown by executed trades and pending orders.',
  executed: {
    description: 'Credit limit utilisation attributable to executed trades.',
    type: {
      blueId: '5mSFBLKEbHuJRnrmTEjggEtTrLgU7NJhaz9tcKqiJVZy',
    },
  },
  name: 'cdm/event/workflow/CreditLimitUtilisation',
  pending: {
    description:
      'Credit limit utilisation attributable to pending unexecuted orders.',
    type: {
      blueId: '5mSFBLKEbHuJRnrmTEjggEtTrLgU7NJhaz9tcKqiJVZy',
    },
  },
} as const;
