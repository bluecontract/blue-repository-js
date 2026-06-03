import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetRateTreatmentEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RateTreatmentEnum']
)(
  zod.enum(['BondEquivalentYield', 'MoneyMarketYield'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetRateTreatmentEnum = z.infer<
  typeof CdmProductAssetRateTreatmentEnumSchema
>;
