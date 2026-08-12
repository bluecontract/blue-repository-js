import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndexSchema } from './CdmObservableAssetMetafieldsReferenceWithMetaInterestRateIndex';
import { CdmProductAssetSpreadScheduleSchema } from './CdmProductAssetSpreadSchedule';
import { CdmProductTemplateStrikeScheduleSchema } from './CdmProductTemplateStrikeSchedule';

const zod = z as any;

export const CdmProductAssetFloatingRateBaseSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FloatingRateBase']
)(
  zod.object({
    capRateSchedule: zod
      .lazy(() => CdmProductTemplateStrikeScheduleSchema)
      .optional(),
    description: zod.string().optional(),
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
    spreadSchedule: zod
      .lazy(() => CdmProductAssetSpreadScheduleSchema)
      .optional(),
  })
);

export type CdmProductAssetFloatingRateBase = z.infer<
  typeof CdmProductAssetFloatingRateBaseSchema
>;
