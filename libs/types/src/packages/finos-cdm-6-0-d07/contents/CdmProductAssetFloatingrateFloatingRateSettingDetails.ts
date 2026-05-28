export const CdmProductAssetFloatingrateFloatingRateSettingDetails = {
  calculationDetails: {
    description:
      'Calculated rate details (observation dates, values, and weights).',
    type: {
      blueId: 'CrPVPZLyLfrUHufFAw5BvtRgXXaqECqrHbdmTXfVK6sd',
    },
  },
  description:
    'Type for reporting the raw (untreated) observed or calculated rate for a calculation period.  If this is a calculated rate, it allows details of the observations and the resulting rate to be returned.\n',
  floatingRate: {
    description: 'The resulting rate that was observed or calculated.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '7pwXmXYCJtWnd348c2JQGBkm9C4renmZRwxbfaypsx5y',
    },
  },
  name: 'cdm/product/asset/floatingrate/FloatingRateSettingDetails',
  observationDate: {
    description: 'The day upon which the rate was observed (for term rates).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
  resetDate: {
    description:
      'The day for which the rate is needed (e.g. period beginning or end date).',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
