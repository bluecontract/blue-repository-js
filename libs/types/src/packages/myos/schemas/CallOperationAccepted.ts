import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CallOperationAcceptedSchema = withTypeBlueId(blueIds['MyOS/Call Operation Accepted'])(
  ResponseSchema.extend({
    "targetSessionId": z.string().optional(),
    "operation": z.string().optional()
  })
);

export type CallOperationAccepted = z.infer<typeof CallOperationAcceptedSchema>;
