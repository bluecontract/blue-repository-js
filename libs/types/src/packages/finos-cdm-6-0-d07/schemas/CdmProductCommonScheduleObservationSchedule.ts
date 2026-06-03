import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeBusinessDayAdjustmentsSchema } from './CdmBaseDatetimeBusinessDayAdjustments';
import { CdmProductCommonScheduleObservationDateSchema } from './CdmProductCommonScheduleObservationDate';

const zod = z as any;

export const CdmProductCommonScheduleObservationScheduleSchema: any =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/product/common/schedule/ObservationSchedule']
  )(
    zod.object({
      dateAdjustments: zod
        .lazy(() => CdmBaseDatetimeBusinessDayAdjustmentsSchema)
        .optional(),
      description: zod.string().optional(),
      name: zod.string().optional(),
      observationDate: zod
        .array(zod.lazy(() => CdmProductCommonScheduleObservationDateSchema))
        .min(0)
        .optional(),
    })
  );

export type CdmProductCommonScheduleObservationSchedule = z.infer<
  typeof CdmProductCommonScheduleObservationScheduleSchema
>;
