import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeOffsetSchema } from './CdmBaseDatetimeOffset';
import { CdmBaseMathAveragingWeightingMethodEnumSchema } from './CdmBaseMathAveragingWeightingMethodEnum';
import { CdmBaseMathRoundingSchema } from './CdmBaseMathRounding';
import { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
import { CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationMethodEnum';
import { CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema } from './CdmObservableAssetCalculatedrateInflationCalculationStyleEnum';
import { CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema } from './CdmObservableAssetFieldWithMetaInterpolationMethodEnum';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmObservableAssetPriceSchema } from './CdmObservableAssetPrice';
import { CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema } from './CdmProductAssetFinalPrincipalExchangeCalculationEnum';
import { CdmProductAssetNegativeInterestRateTreatmentEnumSchema } from './CdmProductAssetNegativeInterestRateTreatmentEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';
import { ComRosettaModelFieldWithMetaStringSchema } from './ComRosettaModelFieldWithMetaString';

export const CdmProductAssetInflationRateSpecificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InflationRateSpecification']
  )(
    z.object({
      averagingMethod: z
        .lazy(() => CdmBaseMathAveragingWeightingMethodEnumSchema)
        .optional(),
      calculationMethod: z
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema
        )
        .optional(),
      calculationParameters: z
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      calculationStyle: z
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema
        )
        .optional(),
      capRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      description: z.string().optional(),
      fallbackBondApplicable: z.boolean(),
      fallbackRate: z
        .lazy(
          () => CdmObservableAssetCalculatedrateFallbackRateParametersSchema
        )
        .optional(),
      finalPrincipalExchangeCalculation: z
        .lazy(() => CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema)
        .optional(),
      finalRateRounding: z.lazy(() => CdmBaseMathRoundingSchema).optional(),
      floatingRateMultiplierSchedule: z
        .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
        .optional(),
      floorRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      indexSource: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      inflationLag: z.lazy(() => CdmBaseDatetimeOffsetSchema),
      initialIndexLevel: z.number().optional(),
      initialRate: z.lazy(() => CdmObservableAssetPriceSchema).optional(),
      interpolationMethod: z.lazy(
        () => CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema
      ),
      mainPublication: z.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
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

export type CdmProductAssetInflationRateSpecification = z.infer<
  typeof CdmProductAssetInflationRateSpecificationSchema
>;
