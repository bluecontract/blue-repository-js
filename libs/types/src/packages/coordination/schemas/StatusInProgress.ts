import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusSchema } from './Status';

const zod = z as any;

export const StatusInProgressSchema: any = withTypeBlueId(
  blueIds['Coordination/Status In Progress']
)(
  StatusSchema.extend({
    description: zod.string().optional(),
    mode: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusInProgress = z.infer<typeof StatusInProgressSchema>;
