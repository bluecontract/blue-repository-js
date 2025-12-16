import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CallOperationRespondedSchema = withTypeBlueId(blueIds['MyOS/Call Operation Responded'])(
  ResponseSchema.extend({
    "events": z.array(ResponseSchema).optional()
  })
);

export type CallOperationResponded = z.infer<typeof CallOperationRespondedSchema>;
