import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetDayDistributionEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/DayDistributionEnum']
)(
  zod.enum(['All', 'First', 'Last', 'Penultimate'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetDayDistributionEnum = z.infer<
  typeof CdmProductAssetDayDistributionEnumSchema
>;
