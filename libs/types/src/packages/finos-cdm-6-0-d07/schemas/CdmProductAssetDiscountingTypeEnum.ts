import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetDiscountingTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DiscountingTypeEnum']
  )(
    z.enum(['AFMA', 'FRA', 'FRAYield', 'Standard'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetDiscountingTypeEnum = z.infer<
  typeof CdmProductAssetDiscountingTypeEnumSchema
>;
