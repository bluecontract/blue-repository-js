import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';

export const CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateProcessingParameters'
    ]
  )(
    z.object({
      capRate: z.number().optional(),
      description: z.string().optional(),
      floorRate: z.number().optional(),
      initialRate: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      multiplier: z.number().optional(),
      name: z.string().optional(),
      negativeTreatment: z
        .lazy(() => CdmProductAssetNegativeInterestRateTreatmentEnumSchema)
        .optional(),
      rounding: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
      spread: z.number().optional(),
      treatment: z
        .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
        .optional(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateProcessingParameters =
  z.infer<
    typeof CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema
  >;
