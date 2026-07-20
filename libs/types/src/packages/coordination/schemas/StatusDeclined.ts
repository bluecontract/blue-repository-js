import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusFailedSchema } from './StatusFailed';

const zod = z as any;

export const StatusDeclinedSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Declined']
)(
  StatusFailedSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusDeclined = z.infer<typeof StatusDeclinedSchema>;
