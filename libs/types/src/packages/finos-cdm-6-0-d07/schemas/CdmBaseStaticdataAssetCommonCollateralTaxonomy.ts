import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonCollateralTaxonomyValue';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonCollateralTaxonomySchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/CollateralTaxonomy'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      taxonomySource: zod.lazy(
        () => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema
      ),
      taxonomyValue: zod.lazy(
        () => CdmBaseStaticdataAssetCommonCollateralTaxonomyValueSchema
      ),
    })
  );

export type CdmBaseStaticdataAssetCommonCollateralTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonCollateralTaxonomySchema
>;
