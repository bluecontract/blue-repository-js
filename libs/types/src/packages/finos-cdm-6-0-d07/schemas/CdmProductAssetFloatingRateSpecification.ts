import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

export const CdmProductAssetFloatingRateSpecificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateSpecification']
  )(
    z.object({
      averagingMethod: z
        .lazy(() => CdmBaseMathAveragingWeightingMethodEnumSchema)
        .optional(),
      calculationParameters: z
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      capRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      description: z.string().optional(),
      fallbackRate: z
        .lazy(
          () => CdmObservableAssetCalculatedrateFallbackRateParametersSchema
        )
        .optional(),
      finalRateRounding: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
      floatingRateMultiplierSchedule: z
        .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
        .optional(),
      floorRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      initialRate: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      name: z.string().optional(),
      negativeInterestRateTreatment: z
        .lazy(() => CdmProductAssetNegativeInterestRateTreatmentEnumSchema)
        .optional(),
      rateOption: z
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema
        )
        .optional(),
      rateTreatment: z
        .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
        .optional(),
      spreadSchedule: z
        .lazy(() => CdmProductAssetSpreadScheduleSchema)
        .optional(),
    })
  );

export type CdmProductAssetFloatingRateSpecification = z.infer<
  typeof CdmProductAssetFloatingRateSpecificationSchema
>;
