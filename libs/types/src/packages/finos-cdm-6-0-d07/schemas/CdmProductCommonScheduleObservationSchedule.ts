import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';

export const CdmProductCommonScheduleObservationScheduleSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationSchedule']
  )(
    z.object({
      dateAdjustments: z
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      observationDate: z
        .array(z.lazy(() => CdmProductCommonScheduleObservationDateSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCommonScheduleObservationSchedule = z.infer<
  typeof CdmProductCommonScheduleObservationScheduleSchema
>;
