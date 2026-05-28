import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleRateScheduleSchema } from './CdmProductCommonScheduleRateSchedule';

export const CdmProductAssetFixedRateSpecificationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/asset/FixedRateSpecification']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      rateSchedule: z
        .lazy(() => CdmProductCommonScheduleRateScheduleSchema)
        .optional(),
    })
  );

export type CdmProductAssetFixedRateSpecification = z.infer<
  typeof CdmProductAssetFixedRateSpecificationSchema
>;
