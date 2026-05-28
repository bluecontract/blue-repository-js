import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

export const CdmProductAssetStubFloatingRateSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/StubFloatingRate']
  )(
    z.object({
      capRateSchedule: z
        .array(z.lazy(() => CdmProductTemplateStrikeScheduleSchema))
        .min(0)
        .optional(),
      description: z.string().optional(),
      floatingRateIndex: z.lazy(
        () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
      ),
      floatingRateMultiplierSchedule: z
        .lazy(() => CdmBaseMathScheduleSchema)
        .optional(),
      floorRateSchedule: z
        .array(z.lazy(() => CdmProductTemplateStrikeScheduleSchema))
        .min(0)
        .optional(),
      indexTenor: z.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
      name: z.string().optional(),
      rateTreatment: z
        .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
        .optional(),
      spreadSchedule: z
        .array(z.lazy(() => CdmProductAssetSpreadScheduleSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductAssetStubFloatingRate = z.infer<
  typeof CdmProductAssetStubFloatingRateSchema
>;
