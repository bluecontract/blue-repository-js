import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CallOperationRespondedSchema: any = withTypeBlueId(
  blueIds['MyOS/Call Operation Responded']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    events: zod.array(zod.lazy(() => ResponseSchema)).optional(),
    name: zod.string().optional(),
  })
);

export type CallOperationResponded = z.infer<
  typeof CallOperationRespondedSchema
>;
