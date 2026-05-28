import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

export const CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaSettledEntityMatrixSourceEnum'
    ]
  )(
    z.object({
      meta: z.lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema).optional(),
      name: z.string().optional(),
      val: z
        .lazy(() => CdmProductAssetSettledEntityMatrixSourceEnumSchema)
        .optional(),
    })
  );

export type CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema
>;
