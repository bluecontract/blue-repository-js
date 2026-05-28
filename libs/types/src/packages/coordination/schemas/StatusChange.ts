import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';

export const StatusChangeSchema = withTypeBlueId(
  blueIds['Coordination/Status Change']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    status: z.lazy(() => DocumentStatusSchema).optional(),
  })
);

export type StatusChange = z.infer<typeof StatusChangeSchema>;
