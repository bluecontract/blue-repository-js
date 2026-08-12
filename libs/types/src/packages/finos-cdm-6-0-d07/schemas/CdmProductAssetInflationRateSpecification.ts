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

const zod = z as any;

export const CdmProductAssetInflationRateSpecificationSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/InflationRateSpecification']
  )(
    zod.object({
      averagingMethod: zod
        .lazy(() => CdmBaseMathAveragingWeightingMethodEnumSchema)
        .optional(),
      calculationMethod: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateInflationCalculationMethodEnumSchema
        )
        .optional(),
      calculationParameters: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
        )
        .optional(),
      calculationStyle: zod
        .lazy(
          () =>
            CdmObservableAssetCalculatedrateInflationCalculationStyleEnumSchema
        )
        .optional(),
      capRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      description: zod.string().optional(),
      fallbackBondApplicable: zod.boolean(),
      fallbackRate: zod
        .lazy(
          () => CdmObservableAssetCalculatedrateFallbackRateParametersSchema
        )
        .optional(),
      finalPrincipalExchangeCalculation: zod
        .lazy(() => CdmProductAssetFinalPrincipalExchangeCalculationEnumSchema)
        .optional(),
      finalRateRounding: zod.lazy(() => CdmBaseMathRoundingSchema).optional(),
      floatingRateMultiplierSchedule: zod
        .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
        .optional(),
      floorRateSchedule: zod
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      indexSource: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
      inflationLag: zod.lazy(() => CdmBaseDatetimeOffsetSchema),
      initialIndexLevel: zod.number().optional(),
      initialRate: zod.lazy(() => CdmObservableAssetPriceSchema).optional(),
      interpolationMethod: zod.lazy(
        () => CdmObservableAssetFieldWithMetaInterpolationMethodEnumSchema
      ),
      mainPublication: zod.lazy(() => ComRosettaModelFieldWithMetaStringSchema),
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

export type CdmProductAssetInflationRateSpecification = z.infer<
  typeof CdmProductAssetInflationRateSpecificationSchema
>;
