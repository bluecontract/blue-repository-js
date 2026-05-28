import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetCalculatedrateFallbackRateParametersSchema } from './CdmObservableAssetCalculatedrateFallbackRateParameters';
import { CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema } from './CdmObservableAssetCalculatedrateFloatingRateCalculationParameters';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

export const CdmProductAssetFloatingRateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRate']
)(
  z.object({
    calculationParameters: z
      .lazy(
        () =>
          CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
      )
      .optional(),
    capRateSchedule: z
      .lazy(() => CdmProductTemplateStrikeScheduleSchema)
      .optional(),
    fallbackRate: z
      .lazy(() => CdmObservableAssetCalculatedrateFallbackRateParametersSchema)
      .optional(),
    floatingRateMultiplierSchedule: z
      .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
      .optional(),
    floorRateSchedule: z
      .lazy(() => CdmProductTemplateStrikeScheduleSchema)
      .optional(),
    name: z.string().optional(),
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

export type CdmProductAssetFloatingRate = z.infer<
  typeof CdmProductAssetFloatingRateSchema
>;
