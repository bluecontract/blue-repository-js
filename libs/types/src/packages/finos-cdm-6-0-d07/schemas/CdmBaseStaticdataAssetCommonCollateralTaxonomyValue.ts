import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnum';
import { CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnumSchema } from './CdmBaseStaticdataAssetCommonUSCFTCPREligibleCollateralEnum';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralTaxonomyValue'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      eu_EMIR_EligibleCollateral: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataAssetCommonEUEMIREligibleCollateralEnumSchema
          )
        )
        .min(0)
        .optional(),
      name: zod.string().optional(),
      nonEnumeratedTaxonomyValue: zod
        .array(zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema))
        .min(0)
        .optional(),
      uk_EMIR_EligibleCollateral: zod
        .array(
          zod.lazy(
            () => CdmBaseStaticdataAssetCommonUKEMIREligibleCollateralEnumSchema
          )
        )
        .min(0)
        .optional(),
      us_CFTC_PR_EligibleCollateral: zod
        .array(
          zod.lazy(
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
