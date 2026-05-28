import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmProductCommonScheduleWeightedAveragingObservationSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds[
      'FINOS-CDM-6.0-d07/cdm/product/common/schedule/WeightedAveragingObservation'
    ]
  )(
    z.object({
      dateTime: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      observationNumber: z.number().optional(),
      weight: z.number(),
    })
  );

export type CdmProductCommonScheduleWeightedAveragingObservation = z.infer<
  typeof CdmProductCommonScheduleWeightedAveragingObservationSchema
>;
