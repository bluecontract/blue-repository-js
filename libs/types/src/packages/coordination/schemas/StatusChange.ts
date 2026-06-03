import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from './DocumentStatus';
import { EventSchema } from './Event';

const zod = z as any;

export const StatusChangeSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Change']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.lazy(() => DocumentStatusSchema).optional(),
  })
);

export type StatusChange = z.infer<typeof StatusChangeSchema>;
