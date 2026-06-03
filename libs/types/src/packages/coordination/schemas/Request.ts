import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from './Event';

const zod = z as any;

export const RequestSchema: any = withTypeBlueId(
  blueIds['Coordination/Request']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    requestId: zod.string().optional(),
  })
);

export type Request = z.infer<typeof RequestSchema>;
