import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

export const CdmProductAssetFloatingRateBaseSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateBase']
  )(
    z.object({
      capRateSchedule: z
        .lazy(() => CdmProductTemplateStrikeScheduleSchema)
        .optional(),
      description: z.string().optional(),
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
      spreadSchedule: z
        .lazy(() => CdmProductAssetSpreadScheduleSchema)
        .optional(),
    })
  );

export type CdmProductAssetFloatingRateBase = z.infer<
  typeof CdmProductAssetFloatingRateBaseSchema
>;
