import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusPendingSchema = withTypeBlueId(blueIds['Status Pending'])(
  DocumentStatusSchema.extend({
    description: z.string().optional(),
    mode: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type StatusPending = z.infer<typeof StatusPendingSchema>;
