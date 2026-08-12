export const CdmEventWorkflowEventTimestamp: Record<string, unknown> = {
  dateTime: {
    description:
      'The CDM specifies that the zoned date time is to be expressed in accordance with ISO 8601, either as UTC as an offset to UTC.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  description:
    'A class to represent the various set of timestamps that can be associated with lifecycle events, as a collection of [dateTime, qualifier].\n',
  name: 'cdm/event/workflow/EventTimestamp',
  qualification: {
    description:
      'The timestamp qualifier is specified through an enumeration because the experience of integrating the DTCC and CME data representations suggests that a wide set of timestamps are currently utilized among service providers, while there is not at present an objective set of criteria that could help suggest a defined set of timestamps as part of the CDM. At some future point, one possible baseline could be developed from the review of the set of timestamps specified across regulatory regimes and regulations (incl. regulations such as high frequency trading). Also, the integration with a further set of implementations and the specification of business workflows such as clearing as part of the CDM development should help confirm the implementation approach in this respect.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: '6c8sFYVqrfeXJRDNBGbeaVtJN5wk6e2cvEc3xKCnPNhr',
    },
  },
};
