import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';

export const CdmProductAssetSettledEntityMatrixSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SettledEntityMatrix']
  )(
    z.object({
      description: z.string().optional(),
      matrixSource: z.lazy(
        () => CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema
      ),
      name: z.string().optional(),
      publicationDate: z.string().optional(),
    })
  );

export type CdmProductAssetSettledEntityMatrix = z.infer<
  typeof CdmProductAssetSettledEntityMatrixSchema
>;
