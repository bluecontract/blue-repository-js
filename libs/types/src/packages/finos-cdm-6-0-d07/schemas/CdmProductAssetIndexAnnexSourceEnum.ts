import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetIndexAnnexSourceEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/IndexAnnexSourceEnum']
  )(
    z.enum(['MasterConfirmation', 'Publisher'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetIndexAnnexSourceEnum = z.infer<
  typeof CdmProductAssetIndexAnnexSourceEnumSchema
>;
