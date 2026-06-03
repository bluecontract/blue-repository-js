import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';

const zod = z as any;

export const CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateProcessingDetails'
    ]
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      processedRate: zod.number(),
      processingParameters: zod
        .lazy(
          () =>
            CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema
        )
        .optional(),
      rawRate: zod.number(),
      spreadExclusiveRate: zod.number(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateProcessingDetails = z.infer<
  typeof CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema
>;
