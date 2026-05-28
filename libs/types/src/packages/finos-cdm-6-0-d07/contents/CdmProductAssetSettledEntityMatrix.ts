export const CdmProductAssetSettledEntityMatrix = {
  description: 'A class to specify the Relevant Settled Entity Matrix.',
  matrixSource: {
    description: 'Relevant settled entity matrix source.',
    schema: {
      required: {
        type: {
          blueId: '4EzhSubEimSQD3zrYHRtobfPPWntUuhEz8YcdxHsi12u',
        },
        value: true,
      },
    },
    type: {
      blueId: '2HJVG7XkuEXr46byHb52g7WoYmwwfUGky6XyUDF7Wjgq',
    },
  },
  name: 'cdm/product/asset/SettledEntityMatrix',
  publicationDate: {
    description:
      'Specifies the publication date of the applicable version of the matrix. When this element is omitted, the Standard Terms Supplement defines rules for which version of the matrix is applicable.\n',
    type: {
      blueId: 'DLRQwz7MQeCrzjy9bohPNwtCxKEBbKaMK65KBrwjfG6K',
    },
  },
} as const;
