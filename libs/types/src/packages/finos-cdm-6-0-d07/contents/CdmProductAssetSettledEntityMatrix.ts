export const CdmProductAssetSettledEntityMatrix: Record<string, unknown> = {
  description: 'A class to specify the Relevant Settled Entity Matrix.',
  matrixSource: {
    description: 'Relevant settled entity matrix source.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'HRm7JHUnU7f1WAdnj8igCiQMRxoyt5gyMtWJpJiRj1LE',
    },
  },
  name: 'cdm/product/asset/SettledEntityMatrix',
  publicationDate: {
    description:
      'Specifies the publication date of the applicable version of the matrix. When this element is omitted, the Standard Terms Supplement defines rules for which version of the matrix is applicable.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
