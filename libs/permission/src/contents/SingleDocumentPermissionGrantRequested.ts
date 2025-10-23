export const singleDocumentPermissionGrantRequested = {
  description:
    'Ask MyOS Admin to grant permisison to document (event emitter) for a concrete target session.',
  name: 'Single Document Permission Grant Requested',
  onBehalfOf: {
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  permissions: {
    type: {
      blueId: '7TCdQstz98WJ8RXqizemdpdg723HeqTZHHiRXCnso7b4',
    },
  },
  targetSessionId: {
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
} as const;
