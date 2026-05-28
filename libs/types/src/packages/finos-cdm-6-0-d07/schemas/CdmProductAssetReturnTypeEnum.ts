import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetReturnTypeEnumSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/ReturnTypeEnum']
)(
  z.enum(['Price', 'Total'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetReturnTypeEnum = z.infer<
  typeof CdmProductAssetReturnTypeEnumSchema
>;
