import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateIndexProcessingTypeEnum'
    ]
  )(
    z.enum([
      'CompoundIndex',
      'Modular',
      'OIS',
      'OvernightAvg',
      'RefBanks',
      'Screen',
    ] as [string, ...string[]]) as unknown as z.ZodObject<any>
  );

export type CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnum =
  z.infer<
    typeof CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema
  >;
