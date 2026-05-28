import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema } from './CdmProductAssetFloatingrateFloatingRateProcessingParameters';

export const CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateProcessingDetails'
    ]
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      processedRate: z.number(),
      processingParameters: z
        .lazy(
          () =>
            CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema
        )
        .optional(),
      rawRate: z.number(),
      spreadExclusiveRate: z.number(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateProcessingDetails = z.infer<
  typeof CdmProductAssetFloatingrateFloatingRateProcessingDetailsSchema
>;
