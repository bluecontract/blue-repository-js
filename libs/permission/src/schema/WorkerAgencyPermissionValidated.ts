import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerAgencyPermissionValidatedSchema = withTypeBlueId(
  blueIds['Worker Agency Permission Validated']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type WorkerAgencyPermissionValidated = z.infer<
  typeof WorkerAgencyPermissionValidatedSchema
>;
