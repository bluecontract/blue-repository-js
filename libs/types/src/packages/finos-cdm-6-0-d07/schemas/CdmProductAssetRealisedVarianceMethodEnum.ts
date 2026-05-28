import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetRealisedVarianceMethodEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/RealisedVarianceMethodEnum']
  )(
    z.enum(['Both', 'Last', 'Previous'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetRealisedVarianceMethodEnum = z.infer<
  typeof CdmProductAssetRealisedVarianceMethodEnumSchema
>;
