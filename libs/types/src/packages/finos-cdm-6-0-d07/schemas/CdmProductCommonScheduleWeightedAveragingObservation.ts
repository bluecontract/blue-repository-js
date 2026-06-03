import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmProductCommonScheduleWeightedAveragingObservationSchema: any =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/WeightedAveragingObservation'
    ]
  )(
    zod.object({
      dateTime: zod.string().optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationNumber: zod.number().optional(),
      weight: zod.number(),
    })
  );

export type CdmProductCommonScheduleWeightedAveragingObservation = z.infer<
  typeof CdmProductCommonScheduleWeightedAveragingObservationSchema
>;
