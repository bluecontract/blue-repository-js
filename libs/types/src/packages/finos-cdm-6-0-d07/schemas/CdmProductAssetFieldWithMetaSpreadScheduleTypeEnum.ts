import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaSpreadScheduleTypeEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmProductAssetSpreadScheduleTypeEnumSchema)
        .optional(),
    })
  );

export type CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema
>;
