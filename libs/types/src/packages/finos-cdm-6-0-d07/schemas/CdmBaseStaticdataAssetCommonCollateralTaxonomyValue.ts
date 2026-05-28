import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralTaxonomyValue'
    ]
  )(
    z.object({
      description: z.string().optional(),
      eu_EMIR_EligibleCollateral: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema
          )
        )
        .min(0)
        .optional(),
      name: z.string().optional(),
      nonEnumeratedTaxonomyValue: z
        .array(z.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      uk_EMIR_EligibleCollateral: z
        .array(
          z.lazy(
            () => CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema
          )
        )
        .min(0)
        .optional(),
      us_CFTC_PR_EligibleCollateral: z
        .array(
          z.lazy(
            () =>
              CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema
          )
        )
        .min(0)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonCollateralTaxonomyValue = z.infer<
  typeof CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema
>;
