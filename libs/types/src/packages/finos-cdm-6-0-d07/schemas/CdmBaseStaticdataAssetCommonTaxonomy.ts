import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema } from './CdmBaseStaticdataAssetCommonTaxonomySourceEnum';
import { CdmBaseStaticdataAssetCommonTaxonomyValueSchema } from './CdmBaseStaticdataAssetCommonTaxonomyValue';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonTaxonomySchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/Taxonomy']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    source: zod
      .lazy(() => CdmBaseStaticdataAssetCommonTaxonomySourceEnumSchema)
      .optional(),
    val: zod
      .lazy(() => CdmBaseStaticdataAssetCommonTaxonomyValueSchema)
      .optional(),
  })
);

export type CdmBaseStaticdataAssetCommonTaxonomy = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomySchema
>;
