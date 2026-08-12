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

const zod = z as any;

export const CdmProductAssetFloatingRateSpecificationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateSpecification']
  )(
    zod.object({
      averagingMethod: zod
        .lazy(() => CdmBaseMathAveragingWeightingMethodEnumSchema)
        .optional(),
      calculationParameters: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      capRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      description: zod.string().optional(),
      fallbackRate: zod
        .lazy(
          () => CdmObservableAssetCalculatedrateFallbackRateParametersSchema
        )
        .optional(),
      finalRateRounding: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
      floatingRateMultiplierSchedule: zod
        .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
        .optional(),
      floorRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      initialRate: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
      name: zod.string().optional(),
      negativeInterestRateTreatment: zod
        .lazy(() => CdmProductAssetNegativeInterestRateTreatmentEnumSchema)
        .optional(),
      rateOption: zod
        .lazy(
          () =>
            CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema
        )
        .optional(),
      rateTreatment: zod
        .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
        .optional(),
      spreadSchedule: zod
        .lazy(() => CdmProductAssetSpreadScheduleSchema)
        .optional(),
    })
  );

export type CdmProductAssetFloatingRateSpecification = z.infer<
  typeof CdmProductAssetFloatingRateSpecificationSchema
>;
