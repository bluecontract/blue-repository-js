export const myOSSessionLink = {
  name: 'MyOS Session Link',
  description:
    'Link targeting a specific document session by its sessionId. Use when referencing a live session rather than a logical document.',
  type: {
    blueId: 'GmD5hRiYhRVGSSQi5ArqffecvoJTd1SvxAZ3usDRs6gT',
  },
  sessionId: {
    description: 'Identifier of the document session being targeted.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
