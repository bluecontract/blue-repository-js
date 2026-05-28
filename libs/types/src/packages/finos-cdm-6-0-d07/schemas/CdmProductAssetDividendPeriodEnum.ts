import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetDividendPeriodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DividendPeriodEnum']
  )(
    z.enum(['FirstPeriod', 'SecondPeriod'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetDividendPeriodEnum = z.infer<
  typeof CdmProductAssetDividendPeriodEnumSchema
>;
