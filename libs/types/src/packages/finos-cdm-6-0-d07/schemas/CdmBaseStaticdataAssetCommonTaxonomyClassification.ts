import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/TaxonomyClassification'
    ]
  )(
    zod.object({
      className: zod.string().optional(),
      name: zod.string().optional(),
      ordinal: zod.number().optional(),
      val: zod.string(),
    })
  );

export type CdmBaseStaticdataAssetCommonTaxonomyClassification = z.infer<
  typeof CdmBaseStaticdataAssetCommonTaxonomyClassificationSchema
>;
