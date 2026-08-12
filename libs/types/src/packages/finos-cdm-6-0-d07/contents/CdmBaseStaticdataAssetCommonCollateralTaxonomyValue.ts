export const CdmBaseStaticdataAssetCommonCollateralTaxonomyValue: Record<
  string,
  unknown
> = {
  description:
    'Specifies the collateral taxonomy value, either as a specified enumeration or as a string.',
  eu_EMIR_EligibleCollateral: {
    description:
      'Identifies European Union Eligible Collateral Assets classification categories based on EMIR Uncleared Margin Rules. Eligible Collateral asset classes for both initial margin (IM) and variation margin (VM) posted and collected between specified entities. Please note: EMIR regulation will detail which eligible collateral assets classes apply to each type of entity pairing (counterparty) and which apply to posting of IM and VM\n',
    itemType: {
      blueId: '7YY6BuPWV5huqtQC8znxT9BwZTTGbLdCwHjJC6KszkAk',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  name: 'cdm/base/staticdata/asset/common/CollateralTaxonomyValue',
  nonEnumeratedTaxonomyValue: {
    description:
      'Identifies the taxonomy value when not specified as an enumeration.',
    itemType: {
      blueId: 'HvrBWWRL9WzJPU9bs48T3Uf9CcUgCfqtEszZPN3tYS3n',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  uk_EMIR_EligibleCollateral: {
    description:
      'Identifies United Kingdom Eligible Collateral Assets classification categories based on UK Onshored EMIR Uncleared Margin Rules Eligible Collateral asset classes for both initial margin (IM) and variation margin (VM) posted and collected between specified entities. Please note: UK EMIR regulation will detail which eligible collateral assets classes apply to each type of entity pairing (counterparty) and which apply to posting of IM and VM.\n',
    itemType: {
      blueId: 'QgrD8EkRPpuS8k3t8qTgcZexsamLyPMKBV9yb67CtLD',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
  us_CFTC_PR_EligibleCollateral: {
    description:
      'Identifies US Eligible Collateral Assets classification categories based on Uncleared Margin Rules published by the CFTC and the US Prudential Regulator. Note: While the same basic categories exist in the CFTC and US Prudential Regulators’ margin rules, the precise definitions or application of those rules could differ between the two rules.\n',
    itemType: {
      blueId: 'qgqfFbzy8ZMENxSvE1EQmUCDCAJq3vFPckR3afAC5fa',
    },
    schema: {
      minItems: 0,
    },
    type: {
      blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
    },
  },
};
