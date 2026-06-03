import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetCompoundingMethodEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/CompoundingMethodEnum']
)(
  zod.enum(['Flat', 'None', 'SpreadExclusive', 'Straight'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetCompoundingMethodEnum = z.infer<
  typeof CdmProductAssetCompoundingMethodEnumSchema
>;
