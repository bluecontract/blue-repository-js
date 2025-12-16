import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const WorkerAgencyPermissionValidatedSchema = withTypeBlueId(blueIds['MyOS/Worker Agency Permission Validated'])(
  EventSchema.extend({})
);

export type WorkerAgencyPermissionValidated = z.infer<typeof WorkerAgencyPermissionValidatedSchema>;
