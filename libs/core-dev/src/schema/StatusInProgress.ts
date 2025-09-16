import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusInProgressSchema = withTypeBlueId(
  blueIds['Status In Progress']
)(
  DocumentStatusSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    mode: z.string().optional(),
  })
);

export type StatusInProgress = z.infer<typeof StatusInProgressSchema>;
