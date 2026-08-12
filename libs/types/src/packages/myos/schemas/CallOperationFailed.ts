import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const CallOperationFailedSchema: any = withTypeBlueId(
  blueIds['MyOS/Call Operation Failed']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    operation: zod.string().optional(),
    reason: zod.string().optional(),
    targetSessionId: zod.string().optional(),
  })
);

export type CallOperationFailed = z.infer<typeof CallOperationFailedSchema>;
