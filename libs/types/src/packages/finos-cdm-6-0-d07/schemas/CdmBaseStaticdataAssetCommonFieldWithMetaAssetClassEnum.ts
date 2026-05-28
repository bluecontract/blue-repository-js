import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataAssetCommonAssetClassEnumSchema } from './CdmBaseStaticdataAssetCommonAssetClassEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/base/staticdata/asset/common/FieldWithMetaAssetClassEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmBaseStaticdataAssetCommonAssetClassEnumSchema)
        .optional(),
    })
  );

export type CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnum = z.infer<
  typeof CdmBaseStaticdataAssetCommonFieldWithMetaAssetClassEnumSchema
>;
