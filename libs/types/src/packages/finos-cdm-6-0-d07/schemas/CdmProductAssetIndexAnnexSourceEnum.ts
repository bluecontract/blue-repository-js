import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetIndexAnnexSourceEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/IndexAnnexSourceEnum']
)(
  zod.enum(['MasterConfirmation', 'Publisher'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmProductAssetIndexAnnexSourceEnum = z.infer<
  typeof CdmProductAssetIndexAnnexSourceEnumSchema
>;
