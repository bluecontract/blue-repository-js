import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetSpreadScheduleTypeEnumSchema } from './CdmProductAssetSpreadScheduleTypeEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaSpreadScheduleTypeEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z.lazy(() => CdmProductAssetSpreadScheduleTypeEnumSchema).optional(),
    })
  );

export type CdmProductAssetFieldWithMetaSpreadScheduleTypeEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaSpreadScheduleTypeEnumSchema
>;
