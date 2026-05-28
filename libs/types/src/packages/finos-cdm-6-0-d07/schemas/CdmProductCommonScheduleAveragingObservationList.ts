import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';

export const CdmProductCommonScheduleAveragingObservationListSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/AveragingObservationList'
    ]
  )(
    z.object({
      averagingObservation: z
        .array(
          z.lazy(
            () => CdmProductCommonScheduleWeightedAveragingObservationSchema
          )
        )
        .min(1)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
    })
  );

export type CdmProductCommonScheduleAveragingObservationList = z.infer<
  typeof CdmProductCommonScheduleAveragingObservationListSchema
>;
