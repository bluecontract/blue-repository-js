import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusSchema } from './Status';

const zod = z as any;

export const StatusPendingSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Pending']
)(
  StatusSchema.extend({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusPending = z.infer<typeof StatusPendingSchema>;
