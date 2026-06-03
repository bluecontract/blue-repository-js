export const CdmLegaldocumentationCommonUmbrellaAgreement: Record<
  string,
  unknown
> = {
  description:
    'A class to specify a set of legal entities which are part of a legal agreement beyond the two contracting parties to that agreement. This data representation reflects the ISDA Create representation.\n',
  isApplicable: {
    description:
      'The determination of whether Umbrella Agreement terms are Applicable (True), or Not Applicable (False)',
    schema: {
      required: true,
    },
    type: {
      blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
    },
  },
  language: {
    description:
      'The language associated with the umbrella agreement, and which applies to all the parties to the umbrella agreement.\n',
    type: {
      blueId: 'GX7CFUmSDrE2MzptunLCCdZwnuwwrenRQqEnHL4x3uoC',
    },
  },
  name: 'cdm/legaldocumentation/common/UmbrellaAgreement',
  parties: {
    description: 'Underlying principals to the umbrella agreement.',
    itemType: {
      blueId: '8i9Ncryq3v4GEFNYHazXRPvCCHC9DGTnoSc9f9vqJXoN',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
