import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductAssetFloatingrateFloatingRateIndexProcessingTypeEnumSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateIndexProcessingTypeEnum'
    ]
  )(
    zod.enum([
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
