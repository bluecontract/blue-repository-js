import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusSchema } from './Status';

const zod = z as any;

export const StatusCompletedSchema: any = withTypeBlueId(
  blueIds['Coordination/Status Completed']
)(
  StatusSchema.extend({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusCompleted = z.infer<typeof StatusCompletedSchema>;
