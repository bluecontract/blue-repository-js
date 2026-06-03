import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetSettledEntityMatrixSourceEnum';
import { ComRosettaModelMetafieldsMetaFieldsSchema } from './ComRosettaModelMetafieldsMetaFields';

const zod = z as any;

export const CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FieldWithMetaSettledEntityMatrixSourceEnum'
    ]
  )(
    zod.object({
      meta: zod
        .lazy(() => ComRosettaModelMetafieldsMetaFieldsSchema)
        .optional(),
      name: zod.string().optional(),
      val: zod
        .lazy(() => CdmProductAssetSettledEntityMatrixSourceEnumSchema)
        .optional(),
    })
  );

export type CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum = z.infer<
  typeof CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema
>;
