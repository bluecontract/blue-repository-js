import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableEventTriggerTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/TriggerTypeEnum']
  )(
    z.enum(['Equal', 'EqualOrGreater', 'EqualOrLess', 'Greater', 'Less'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventTriggerTypeEnum = z.infer<
  typeof CdmObservableEventTriggerTypeEnumSchema
>;
