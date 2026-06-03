import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmObservableEventTriggerEventSchema } from './CdmObservableEventTriggerEvent';

const zod = z as any;

export const CdmProductTemplateBarrierSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/product/template/Barrier']
)(
  zod.object({
    barrierCap: zod.lazy(() => CdmObservableEventTriggerEventSchema).optional(),
    barrierFloor: zod
      .lazy(() => CdmObservableEventTriggerEventSchema)
      .optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type CdmProductTemplateBarrier = z.infer<
  typeof CdmProductTemplateBarrierSchema
>;
