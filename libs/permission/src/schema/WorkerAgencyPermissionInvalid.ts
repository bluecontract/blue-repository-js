import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionInvalidSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Invalid']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    issues: z.array(z.string()).optional(),
  })
);

export type WorkerAgencyPermissionInvalid = z.infer<
  typeof WorkerAgencyPermissionInvalidSchema
>;
