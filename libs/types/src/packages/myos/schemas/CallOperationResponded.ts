import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

export const CallOperationRespondedSchema = withTypeBlueId(
  blueIds['MyOS/Call Operation Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    events: z.array(z.lazy(() => ResponseSchema)).optional(),
    name: z.string().optional(),
  })
);

export type CallOperationResponded = z.infer<
  typeof CallOperationRespondedSchema
>;
