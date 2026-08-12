export const CdmEventWorkflowCreditLimitUtilisation: Record<string, unknown> = {
  description:
    'Credit limit utilisation breakdown by executed trades and pending orders.',
  executed: {
    description: 'Credit limit utilisation attributable to executed trades.',
    type: {
      blueId: 'DhHQHqqp2Z9sKdNPDi7Zcxze2V3FZafnK1rKbVaWWDHE',
    },
  },
  name: 'cdm/event/workflow/CreditLimitUtilisation',
  pending: {
    description:
      'Credit limit utilisation attributable to pending unexecuted orders.',
    type: {
      blueId: 'DhHQHqqp2Z9sKdNPDi7Zcxze2V3FZafnK1rKbVaWWDHE',
    },
  },
};
