export const CdmBaseDatetimeBusinessCenterTime: Record<string, unknown> = {
  businessCenter: {
    description:
      'A code identifying a business day calendar location. A business day calendar location is drawn from the list identified by the business day calendar location enumeration.\n',
    schema: {
      required: true,
    },
    type: {
      blueId: 'EtUp3RuaDWzJnGNfgdjWD82gBrcgUyd6KM7cMfBajMzy',
    },
  },
  description:
    'A class for defining a time with respect to a business day calendar location. For example, 11:00:00 GBLO.',
  hourMinuteTime: {
    description:
      "A time specified in hh:mm:ss format where the second component must be '00', e.g. 11am would be represented as 11:00:00.\n",
    schema: {
      required: true,
    },
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/base/datetime/BusinessCenterTime',
};
