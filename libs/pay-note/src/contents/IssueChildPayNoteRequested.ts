export const issueChildPayNoteRequested = {
  childPayNote: {
    description: 'Complete PayNote',
  },
  description:
    'The Payer requests to issue a new PayNote.\nThe requested PayNote must have amount/total specified and in the same currency as this PayNote.\nIf approved by Guarator, amount/total of this PayNote will be deducted by this value.\nIf child PayNote is later cancelled, or captured value is smaller than the total, the funds will be added back to amount/total.\n',
  name: 'Issue Child PayNote Requested',
  type: {
    blueId: '8HQh6LoN8aJ344qodmL6fR5eA7e83ri2CTAshHqU5pLk',
  },
} as const;
