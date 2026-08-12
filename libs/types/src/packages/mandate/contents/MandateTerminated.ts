export const MandateTerminated: Record<string, unknown> = {
  description:
    'Lifecycle Message emitted by the standard termination operation or another\nauthorized mandate operation.\n\nThe inherited termination workflow applies the terminal lifecycle transition\nwhen the current status permits it, derives terminatedAt from the root causal\nTimeline Entry, and requests graceful processing termination. A failed\nmandate may therefore stop processing without replacing its failure state.\nThis Message does not supply the effective timestamp and is not re-emitted by\nthe accepting workflow. The inherited inResponseTo field may identify the\nMessage that invoked termination.\n',
  name: 'Mandate Terminated',
  reason: {
    description:
      'Required human-readable or machine-generated termination reason. The\ninherited termination workflow propagates this value unchanged to the\ngraceful processor termination request.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  type: {
    blueId: '768MxgQEHnLSkedHWHtjj43mAjH361Zf6pKZgVxi5po3',
  },
};
