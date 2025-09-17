import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusCompletedSchema = withTypeBlueId(
  blueIds['Status Completed']
)(
  DocumentStatusSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    mode: z.string().optional(),
  })
);

export type StatusCompleted = z.infer<typeof StatusCompletedSchema>;
