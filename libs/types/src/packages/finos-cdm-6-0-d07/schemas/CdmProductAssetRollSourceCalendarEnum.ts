import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetRollSourceCalendarEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RollSourceCalendarEnum']
  )(
    z.enum(['Future', 'ListedOption'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetRollSourceCalendarEnum = z.infer<
  typeof CdmProductAssetRollSourceCalendarEnumSchema
>;
