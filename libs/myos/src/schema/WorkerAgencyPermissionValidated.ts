import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/conversation';

export const WorkerAgencyPermissionValidatedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Validated']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type WorkerAgencyPermissionValidated = z.infer<
  typeof WorkerAgencyPermissionValidatedSchema
>;
