import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusCompletedSchema } from '../../coordination/schemas/StatusCompleted';

const zod = z as any;

export const StatusTerminatedSchema: any = withTypeBlueId(
  blueIds['Mandate/Status Terminated']
)(
  StatusCompletedSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusTerminated = z.infer<typeof StatusTerminatedSchema>;
