export const CdmLegaldocumentationCommonResourceLength = {
  description: 'A class to indicate the length of the resource.',
  lengthUnit: {
    description:
      'The length unit of the resource. For example, pages (pdf, text documents) or time (audio, video files).',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: 'H1cpAvAZcBXBrWSby7gNSkMZhqb2aZQZu6eTk7fAzab9',
    },
  },
  lengthValue: {
    description: 'The length value of the resource.',
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
  name: 'cdm/legaldocumentation/common/ResourceLength',
} as const;
