import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';

const zod = z as any;

export const CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/asset/floatingrate/FloatingRateProcessingParameters'
    ]
  )(
    zod.object({
      capRate: zod.number().optional(),
      description: zod.string().optional(),
      floorRate: zod.number().optional(),
      initialRate: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
      multiplier: zod.number().optional(),
      name: zod.string().optional(),
      negativeTreatment: zod
        .lazy(() => CdmProductAssetNegativeInterestRateTreatmentEnumSchema)
        .optional(),
      rounding: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
      spread: zod.number().optional(),
      treatment: zod
        .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
        .optional(),
    })
  );

export type CdmProductAssetFloatingrateFloatingRateProcessingParameters =
  z.infer<
    typeof CdmProductAssetFloatingrateFloatingRateProcessingParametersSchema
  >;
