import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
import { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
import { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';

export const CdmObservableEventTriggerSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Trigger']
)(
  z.object({
    creditEvents: z.lazy(() => CdmObservableEventCreditEventsSchema).optional(),
    creditEventsReference: z
      .lazy(
        () => CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema
      )
      .optional(),
    description: z.string().optional(),
    level: z
      .array(z.lazy(() => CdmObservableAssetPriceScheduleSchema))
      .min(0)
      .max(2)
      .optional(),
    name: z.string().optional(),
    triggerTimeType: z
      .lazy(() => CdmObservableEventTriggerTimeTypeEnumSchema)
      .optional(),
    triggerType: z
      .lazy(() => CdmObservableEventTriggerTypeEnumSchema)
      .optional(),
  })
);

export type CdmObservableEventTrigger = z.infer<
  typeof CdmObservableEventTriggerSchema
>;
