import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerSessionStartingSchema = withTypeBlueId(
  blueIds['Worker Session Starting']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    targetDocumentType: z.string().optional(),
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;
