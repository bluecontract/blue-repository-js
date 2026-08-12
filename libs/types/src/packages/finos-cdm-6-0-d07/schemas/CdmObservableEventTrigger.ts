import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableAssetPriceScheduleSchema } from './CdmObservableAssetPriceSchedule';
import { CdmObservableEventCreditEventsSchema } from './CdmObservableEventCreditEvents';
import { CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema } from './CdmObservableEventMetafieldsReferenceWithMetaCreditEvents';
import { CdmObservableEventTriggerTimeTypeEnumSchema } from './CdmObservableEventTriggerTimeTypeEnum';
import { CdmObservableEventTriggerTypeEnumSchema } from './CdmObservableEventTriggerTypeEnum';

const zod = z as any;

export const CdmObservableEventTriggerSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/Trigger']
)(
  zod.object({
    creditEvents: zod
      .lazy(() => CdmObservableEventCreditEventsSchema)
      .optional(),
    creditEventsReference: zod
      .lazy(
        () => CdmObservableEventMetafieldsReferenceWithMetaCreditEventsSchema
      )
      .optional(),
    description: zod.string().optional(),
    level: zod
      .array(zod.lazy(() => CdmObservableAssetPriceScheduleSchema))
      .min(0)
      .max(2)
      .optional(),
    name: zod.string().optional(),
    triggerTimeType: zod
      .lazy(() => CdmObservableEventTriggerTimeTypeEnumSchema)
      .optional(),
    triggerType: zod
      .lazy(() => CdmObservableEventTriggerTypeEnumSchema)
      .optional(),
  })
);

export type CdmObservableEventTrigger = z.infer<
  typeof CdmObservableEventTriggerSchema
>;
