import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetRollSourceCalendarEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RollSourceCalendarEnum']
)(
  zod.enum(['Future', 'ListedOption'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetRollSourceCalendarEnum = z.infer<
  typeof CdmProductAssetRollSourceCalendarEnumSchema
>;
