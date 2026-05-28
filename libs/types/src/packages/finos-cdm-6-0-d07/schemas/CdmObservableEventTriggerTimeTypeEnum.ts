import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmObservableEventTriggerTimeTypeEnumSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/TriggerTimeTypeEnum']
  )(
    z.enum(['Anytime', 'Closing'] as [
      string,
      ...string[]
    ]) as unknown as z.ZodObject<any>
  );

export type CdmObservableEventTriggerTimeTypeEnum = z.infer<
  typeof CdmObservableEventTriggerTimeTypeEnumSchema
>;
