import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetRateTreatmentEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RateTreatmentEnum']
  )(
    z.enum(['BondEquivalentYield', 'MoneyMarketYield'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetRateTreatmentEnum = z.infer<
  typeof CdmProductAssetRateTreatmentEnumSchema
>;
