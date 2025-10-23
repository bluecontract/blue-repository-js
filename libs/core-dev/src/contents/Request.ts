export const request = {
  name: 'Request',
  description:
    'The base type for any event that represents a specific, trackable request to another participant or service. It mandates the inclusion of a unique identifier.\n',
  type: {
    blueId: '3gtD3i9bgfhDat3VB53vrQpchWFn1McYe2ngSc3YLjar',
  },
  requestId: {
    description:
      'A caller-generated ID for this specific request. This ID is used by the recipient to correlate their response.\n',
    type: {
      blueId: 'F92yo19rCcbBoBSpUA5LRxpfDejJDAaP1PRxxbWAraVP',
    },
  },
} as const;
