import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';

const zod = z as any;

export const CdmProductTemplateKnockSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Knock']
)(
  zod.object({
    description: zod.string().optional(),
    knockIn: zod.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    knockOut: zod.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateKnock = z.infer<
  typeof CdmProductTemplateKnockSchema
>;
