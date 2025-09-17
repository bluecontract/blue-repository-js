import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';
import { DocumentStatusSchema } from './DocumentStatus';

export const StatusChangeSchema = withTypeBlueId(blueIds['Status Change'])(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    status: DocumentStatusSchema.optional(),
  })
);

export type StatusChange = z.infer<typeof StatusChangeSchema>;
