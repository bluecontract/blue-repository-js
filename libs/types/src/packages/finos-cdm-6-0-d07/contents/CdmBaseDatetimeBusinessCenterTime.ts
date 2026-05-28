export const CdmBaseDatetimeBusinessCenterTime = {
  businessCenter: {
    description:
      'A code identifying a business day calendar location. A business day calendar location is drawn from the list identified by the business day calendar location enumeration.\n',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2Y1JVjnbbb22zrKVYtvVRfAkqMEsujAWoUHytGJxuprQ',
    },
  },
  description:
    'A class for defining a time with respect to a business day calendar location. For example, 11:00:00 GBLO.',
  hourMinuteTime: {
    description:
      "A time specified in hh:mm:ss format where the second component must be '00', e.g. 11am would be represented as 11:00:00.\n",
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  name: 'cdm/base/datetime/BusinessCenterTime',
} as const;
