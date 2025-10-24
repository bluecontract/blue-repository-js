import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const WorkerSessionStartingSchema = withTypeBlueId(
  blueIds['Worker Session Starting']
)(
  EventSchema.extend({
    description: z.string().optional(),
    granteeDocumentId: z.unknown().optional(),
    name: z.string().optional(),
    targetDocumentType: z.unknown().optional(),
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;
