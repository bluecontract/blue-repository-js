import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/FPVFinalPriceElectionFallbackEnum'
    ]
  )(
    zod.enum(['FPVClose', 'FPVHedgeExecution'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetFPVFinalPriceElectionFallbackEnum = z.infer<
  typeof CdmProductAssetFPVFinalPriceElectionFallbackEnumSchema
>;
