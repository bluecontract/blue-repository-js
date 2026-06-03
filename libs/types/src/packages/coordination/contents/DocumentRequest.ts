export const DocumentRequest: Record<string, unknown> = {
  description:
    'Source specialization for a request that originated from another Blue document or document-processing session. It is\nused when one document asks another document to perform an operation, provide data, bootstrap state, or respond to a\npending action.\n\nDocument Request is a source category, not an actor category. The actor may be a principal or agent; the source says\nthe action was mediated through another document. This is useful for policies that allow document-to-document\nautomation for some operations while requiring browser-session principal confirmation for others.\n',
  documentId: {
    description:
      'Identifier or reference of the source document or document session that produced the request.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  epoch: {
    description:
      'Optional monotonically increasing version, epoch, or processing counter for the source document. It helps recipients\ndetect stale requests and reason about document evolution.\n',
    type: {
      blueId: 'E2LM6qgzWG9ttagq2xTmiZkgYEAgkYedFCmU9v7NnVEq',
    },
  },
  name: 'Document Request',
  type: {
    blueId: 'Qm35f9xFUH84i745uPMj5jjMX1oCCG79aeSfHViipxG',
  },
};
