import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';

export const CdmProductTemplateBarrierSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Barrier']
)(
  z.object({
    barrierCap: z.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    barrierFloor: z.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type CdmProductTemplateBarrier = z.infer<
  typeof CdmProductTemplateBarrierSchema
>;
