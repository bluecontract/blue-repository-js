import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetIndexAnnexSourceEnumSchema } from './CdmProductAssetIndexAnnexSourceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaIndexAnnexSourceEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod.lazy(() => CdmProductAssetIndexAnnexSourceEnumSchema).optional(),
    })
  );

export type CdmProductAssetFieldWithMetaIndexAnnexSourceEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaIndexAnnexSourceEnumSchema
>;
