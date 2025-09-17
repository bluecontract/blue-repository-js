import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusFailedSchema = withTypeBlueId(blueIds['Status Failed'])(
  DocumentStatusSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    mode: z.string().optional(),
  })
);

export type StatusFailed = z.infer<typeof StatusFailedSchema>;
