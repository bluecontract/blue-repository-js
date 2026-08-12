export const CdmLegaldocumentationCommonContractualTermsSupplement: Record<
  string,
  unknown
> = {
  contractualTermsSupplementType: {
    description: 'Identifies the form of applicable contractual supplement.',
    schema: {
      required: true,
    },
    type: {
      blueId: 'DTifFxeQTfuFKdA6vk8vUgRXB6p5tSYi7f6BmAEGxMn2',
    },
  },
  description:
    'A contractual supplement (such as those published by ISDA) and its publication date that will apply to the trade.\n',
  name: 'cdm/legaldocumentation/common/ContractualTermsSupplement',
  publicationDate: {
    description:
      'Specifies the publication date of the applicable version of the contractual supplement.',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
};
