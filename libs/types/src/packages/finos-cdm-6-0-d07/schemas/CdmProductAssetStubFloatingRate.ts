import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodSchema } from './CdmBaseDatetimePeriod';
import { CdmBaseMathScheduleSchema } from './CdmBaseMathSchedule';
import { CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema } from './CdmBaseStaticdataAssetRatesFloatingRateIndexEnum';
import { CdmProductAssetRateTreatmentEnumSchema } from './CdmProductAssetRateTreatmentEnum';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

const zod = z as any;

export const CdmProductAssetStubFloatingRateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/StubFloatingRate']
)(
  zod.object({
    capRateSchedule: zod
      .array(zod.lazy(() => CdmProductTemplateStrikeScheduleSchema))
      .min(0)
      .optional(),
    description: zod.string().optional(),
    floatingRateIndex: zod.lazy(
      () => CdmBaseStaticdataAssetRatesFloatingRateIndexEnumSchema
    ),
    floatingRateMultiplierSchedule: zod
      .lazy(() => CdmBaseMathScheduleSchema)
      .optional(),
    floorRateSchedule: zod
      .array(zod.lazy(() => CdmProductTemplateStrikeScheduleSchema))
      .min(0)
      .optional(),
    indexTenor: zod.lazy(() => CdmBaseDatetimePeriodSchema).optional(),
    name: zod.string().optional(),
    rateTreatment: zod
      .lazy(() => CdmProductAssetRateTreatmentEnumSchema)
      .optional(),
    spreadSchedule: zod
      .array(zod.lazy(() => CdmProductAssetSpreadScheduleSchema))
      .min(0)
      .optional(),
  })
);

export type CdmProductAssetStubFloatingRate = z.infer<
  typeof CdmProductAssetStubFloatingRateSchema
>;
