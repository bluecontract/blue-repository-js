export const payNoteCancellationRequested = {
  name: 'PayNote Cancellation Requested',
  description:
    'The Payer requests to cancel PayNote that is Approved but not yet\nReserved or Captured.\n',
  type: {
    blueId: '8HQh6LoN8aJ344qodmL6fR5eA7e83ri2CTAshHqU5pLk',
  },
  childPayNote: {
    description: 'Complete PayNote',
  },
} as const;
