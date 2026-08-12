import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmProductCommonScheduleWeightedAveragingObservationSchema } from './CdmProductCommonScheduleWeightedAveragingObservation';

const zod = z as any;

export const CdmProductCommonScheduleAveragingObservationListSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/AveragingObservationList'
    ]
  )(
    zod.object({
      averagingObservation: zod
        .array(
          zod.lazy(
            () => CdmProductCommonScheduleWeightedAveragingObservationSchema
          )
        )
        .min(1)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
    })
  );

export type CdmProductCommonScheduleAveragingObservationList = z.infer<
  typeof CdmProductCommonScheduleAveragingObservationListSchema
>;
