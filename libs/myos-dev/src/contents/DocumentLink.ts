export const documentLink = {
  description:
    'Link targeting a specific Blue document by its stable documentId (initial blueId before any processing). Used to point to a logical document regardless of session.',
  documentId: {
    description:
      'Stable document identifier (original BlueId) of the target document.',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  name: 'Document Link',
  type: {
    blueId: 'GmD5hRiYhRVGSSQi5ArqffecvoJTd1SvxAZ3usDRs6gT',
  },
} as const;
