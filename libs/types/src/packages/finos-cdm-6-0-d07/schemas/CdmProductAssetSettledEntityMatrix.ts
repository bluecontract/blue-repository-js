import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema } from './CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnum';

const zod = z as any;

export const CdmProductAssetSettledEntityMatrixSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SettledEntityMatrix']
)(
  zod.object({
    description: zod.string().optional(),
    matrixSource: zod.lazy(
      () => CdmProductAssetFieldWithMetaSettledEntityMatrixSourceEnumSchema
    ),
    name: zod.string().optional(),
    publicationDate: zod.string().optional(),
  })
);

export type CdmProductAssetSettledEntityMatrix = z.infer<
  typeof CdmProductAssetSettledEntityMatrixSchema
>;
