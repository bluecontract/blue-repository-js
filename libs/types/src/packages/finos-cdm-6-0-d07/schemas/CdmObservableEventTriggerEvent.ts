import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseDatetimeAveragingScheduleSchema } from './CdmBaseDatetimeAveragingSchedule';
import { CdmBaseDatetimeDateListSchema } from './CdmBaseDatetimeDateList';
import { CdmObservableEventFeaturePaymentSchema } from './CdmObservableEventFeaturePayment';
import { CdmObservableEventTriggerSchema } from './CdmObservableEventTrigger';

const zod = z as any;

export const CdmObservableEventTriggerEventSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/TriggerEvent']
)(
  zod.object({
    description: zod.string().optional(),
    featurePayment: zod
      .lazy(() => CdmObservableEventFeaturePaymentSchema)
      .optional(),
    name: zod.string().optional(),
    schedule: zod
      .array(zod.lazy(() => CdmBaseDatetimeAveragingScheduleSchema))
      .min(0)
      .optional(),
    trigger: zod.lazy(() => CdmObservableEventTriggerSchema),
    triggerDates: zod.lazy(() => CdmBaseDatetimeDateListSchema).optional(),
  })
);

export type CdmObservableEventTriggerEvent = z.infer<
  typeof CdmObservableEventTriggerEventSchema
>;
