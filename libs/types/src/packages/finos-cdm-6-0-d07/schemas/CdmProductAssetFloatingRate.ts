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

const zod = z as any;

export const CdmProductAssetFloatingRateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRate']
)(
  zod.object({
    calculationParameters: zod
      .lazy(
        () =>
          CdmObservableAssetCalculatedrateFloatingRateCalculationParametersSchema
      )
      .optional(),
    capRateSchedule: zod
      .lazy(() => CdmProductTemplateStrikeScheduleSchema)
      .optional(),
    fallbackRate: zod
      .lazy(() => CdmObservableAssetCalculatedrateFallbackRateParametersSchema)
      .optional(),
    floatingRateMultiplierSchedule: zod
      .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
      .optional(),
    floorRateSchedule: zod
      .lazy(() => CdmProductTemplateStrikeScheduleSchema)
      .optional(),
    name: zod.string().optional(),
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

export type CdmProductAssetFloatingRate = z.infer<
  typeof CdmProductAssetFloatingRateSchema
>;
