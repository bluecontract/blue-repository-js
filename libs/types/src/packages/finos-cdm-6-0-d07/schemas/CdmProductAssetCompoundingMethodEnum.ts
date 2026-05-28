import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetCompoundingMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CompoundingMethodEnum']
  )(
    z.enum(['Flat', 'None', 'SpreadExclusive', 'Straight'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetCompoundingMethodEnum = z.infer<
  typeof CdmProductAssetCompoundingMethodEnumSchema
>;
