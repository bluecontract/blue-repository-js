import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmObservableEventTriggerTimeTypeEnumSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/observable/event/TriggerTimeTypeEnum']
)(
  zod.enum(['Anytime', 'Closing'] as [
    string,
    ...string[]
  ]) as unknown as z.ZodObject<any>
);

export type CdmObservableEventTriggerTimeTypeEnum = z.infer<
  typeof CdmObservableEventTriggerTimeTypeEnumSchema
>;
