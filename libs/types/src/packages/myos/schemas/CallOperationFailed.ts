import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const CallOperationFailedSchema = withTypeBlueId(blueIds['MyOS/Call Operation Failed'])(
  ResponseSchema.extend({
    "targetSessionId": z.string().optional(),
    "operation": z.string().optional(),
    "reason": z.string().optional()
  })
);

export type CallOperationFailed = z.infer<typeof CallOperationFailedSchema>;
