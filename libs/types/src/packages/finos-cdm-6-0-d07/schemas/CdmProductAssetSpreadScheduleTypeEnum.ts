import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetSpreadScheduleTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/SpreadScheduleTypeEnum']
  )(
    z.enum(['Long', 'Short'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetSpreadScheduleTypeEnum = z.infer<
  typeof CdmProductAssetSpreadScheduleTypeEnumSchema
>;
