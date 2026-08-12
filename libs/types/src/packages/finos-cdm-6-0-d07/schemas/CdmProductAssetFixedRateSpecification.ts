import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';

const zod = z as any;

export const CdmProductAssetFixedRateSpecificationSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FixedRateSpecification']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    rateSchedule: zod
      .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
      .optional(),
  })
);

export type CdmProductAssetFixedRateSpecification = z.infer<
  typeof CdmProductAssetFixedRateSpecificationSchema
>;
