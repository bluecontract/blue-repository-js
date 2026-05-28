import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';

export const CdmProductCommonScheduleObservationDatesSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationDates']
  )(
    z.object({
      description: z.string().optional(),
      name: z.string().optional(),
      observationSchedule: z
        .lazy(() => CdmProductCommonScheduleObservationScheduleSchema)
        .optional(),
      parametricDates: z
        .lazy(() => CdmProductCommonScheduleParametricDatesSchema)
        .optional(),
      periodicSchedule: z
        .lazy(() => CdmBaseDatetimePeriodicDatesSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleObservationDates = z.infer<
  typeof CdmProductCommonScheduleObservationDatesSchema
>;
