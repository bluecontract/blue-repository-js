import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetRealisedVarianceMethodEnumSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RealisedVarianceMethodEnum']
  )(
    zod.enum(['Both', 'Last', 'Previous'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetRealisedVarianceMethodEnum = z.infer<
  typeof CdmProductAssetRealisedVarianceMethodEnumSchema
>;
