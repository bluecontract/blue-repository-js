import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetInterestShortfallCapEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InterestShortfallCapEnum']
  )(
    zod.enum(['Fixed', 'Variable'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetInterestShortfallCapEnum = z.infer<
  typeof CdmProductAssetInterestShortfallCapEnumSchema
>;
