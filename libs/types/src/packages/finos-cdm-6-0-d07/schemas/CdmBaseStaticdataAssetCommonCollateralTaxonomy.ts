import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';

export const CdmBaseStaticdataAssetCommonCollateralTaxonomySchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralTaxonomy'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      taxonomySource: z.lazy(
        () => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema
      ),
      taxonomyValue: z.lazy(
        () => CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema
      ),
    })
  );

export type CdmBaseStaticdataAssetCommonCollateralTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonCollateralTaxonomySchema
>;
