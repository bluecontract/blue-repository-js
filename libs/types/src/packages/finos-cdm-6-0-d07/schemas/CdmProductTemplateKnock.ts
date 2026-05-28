import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';

export const CdmProductTemplateKnockSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Knock']
)(
  z.object({
    description: z.string().optional(),
    knockIn: z.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    knockOut: z.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    name: z.string().optional(),
  })
);

export type CdmProductTemplateKnock = z.infer<
  typeof CdmProductTemplateKnockSchema
>;
