import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';
import { StatusSchema } from './Status';

const zod = z as any;

export const StatusChangeSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Change']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.lazy(() => StatusSchema).optional(),
  })
);

export type StatusChange = z.infer<typeof StatusChangeSchema>;
