import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaIndexAnnexSourceEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmProductAssetIndexAnnexSourceEnumSchema).optional(),
    })
  );

export type CdmProductAssetFieldWithMetaIndexAnnexSourceEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema
>;
