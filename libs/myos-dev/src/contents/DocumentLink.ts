export const documentLink = {
  name: 'Document Link',
  description:
    'Link targeting a specific Blue document by its stable documentId (initial blueId before any processing). Used to point to a logical document regardless of session.',
  type: {
    blueId: 'GmD5hRiYhRVGSSQi5ArqffecvoJTd1SvxAZ3usDRs6gT',
  },
  documentId: {
    description:
      'Stable document identifier (original BlueId) of the target document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
