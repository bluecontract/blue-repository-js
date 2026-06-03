import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimePeriodicDatesSchema } from './CdmBaseDatetimePeriodicDates';
import { CdmProductCommonScheduleObservationScheduleSchema } from './CdmProductCommonScheduleObservationSchedule';
import { CdmProductCommonScheduleParametricDatesSchema } from './CdmProductCommonScheduleParametricDates';

const zod = z as any;

export const CdmProductCommonScheduleObservationDatesSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationDates']
  )(
    zod.object({
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationSchedule: zod
        .lazy(() => CdmProductCommonScheduleObservationScheduleSchema)
        .optional(),
      parametricDates: zod
        .lazy(() => CdmProductCommonScheduleParametricDatesSchema)
        .optional(),
      periodicSchedule: zod
        .lazy(() => CdmBaseDatetimePeriodicDatesSchema)
        .optional(),
    })
  );

export type CdmProductCommonScheduleObservationDates = z.infer<
  typeof CdmProductCommonScheduleObservationDatesSchema
>;
