export const CdmProductCollateralCollateralTreatment: Record<string, unknown> =
  {
    concentrationLimit: {
      description:
        'Specification of concentration limits applicable to the collateral criteria.',
      itemType: {
        blueId: 'G115DdfxDj4CHzMSeZHcm923Rr9JELfKiG6pVf9ceVu6',
      },
      schema: {
        minItems: 0,
      },
      type: {
        blueId: '8DSFoWG9MqRSUhStqoPLrwVQiYByRh18NWbDEarN8MKF',
      },
    },
    description:
      'Specifies the treatment terms for the eligible collateral criteria specified.',
    isIncluded: {
      description:
        'A boolean attribute to specify whether collateral critieria are inclusion (True) or exclusion (False) criteria.\n',
      schema: {
        required: true,
      },
      type: {
        blueId: 'AwvXD961fmnmqcSQhjMA7r15HpVh39cefb6ZTyUz2Fm2',
      },
    },
    name: 'cdm/product/collateral/CollateralTreatment',
    valuationTreatment: {
      description:
        'Specification of the valuation treatment for the specified collateral.',
      type: {
        blueId: '6jPEeuHYwc7SYkDRExZS37FF7KdHg9uaHEasdRpFFvGN',
      },
    },
  };
