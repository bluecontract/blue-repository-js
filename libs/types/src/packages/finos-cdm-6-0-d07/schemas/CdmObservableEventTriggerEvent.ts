import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
import { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
import { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';

export const CdmObservableEventTriggerEventSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/TriggerEvent']
  )(
    z.object({
      description: z.string().optional(),
      featurePayment: z
        .lazy(() => CdmObservableEventFeaturePaymentSchema)
        .optional(),
      name: z.string().optional(),
      schedule: z
        .array(z.lazy(() => CdmBaseDatetimeAveragingScheduleSchema))
        .min(0)
        .optional(),
      trigger: z.lazy(() => CdmObservableEventTriggerSchema),
      triggerDates: z.lazy(() => CdmBaseDatetimeDateListSchema).optional(),
    })
  );

export type CdmObservableEventTriggerEvent = z.infer<
  typeof CdmObservableEventTriggerEventSchema
>;
