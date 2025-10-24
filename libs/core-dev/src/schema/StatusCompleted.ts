import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusCompletedSchema = withTypeBlueId(
  blueIds['Status Completed']
)(
  DocumentStatusSchema.extend({
    description: z.string().optional(),
    mode: z.unknown().optional(),
    name: z.string().optional(),
  })
);

export type StatusCompleted = z.infer<typeof StatusCompletedSchema>;
