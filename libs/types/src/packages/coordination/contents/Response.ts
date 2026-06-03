export const Response: Record<string, unknown> = {
  description:
    'Base event/content type for responses to requests. A Response links back to a Request through `inResponseTo` and may\nbe specialized by concrete response types that define status, result, error, payload, or participant-specific fields.\n\nResponse is intentionally generic. It provides correlation semantics only; domain workflows decide whether the\nresponse is accepted, whether it completes a pending action, and what document changes or events follow.\n',
  inResponseTo: {
    description:
      'Reference or request identifier for the request being answered. Concrete response types may require a full Request\nnode, a requestId text value, or another deterministic correlation object.\n',
    type: {
      description:
        'A structured reference linking this response back to the original action and trigger.',
      incomingEvent: {
        description:
          'An event which initiated the entire workflow. Normally just blueId of it.',
      },
      name: 'Correlation',
      requestId: {
        description:
          "The 'requestId' from the specific Request event this is a response to.",
        type: {
          blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
        },
      },
    },
  },
  name: 'Response',
  type: {
    blueId: 'ENRQ621TbJpLg2cGyYkgTmPRLGKZkPqCzkBgm4yEXKF5',
  },
};
