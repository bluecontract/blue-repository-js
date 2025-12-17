import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/conversation';

export const WorkerSessionStartingSchema = withTypeBlueId(
  blueIds['Worker Session Starting']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    granteeDocumentId: z.string().optional(),
    name: z.string().optional(),
    targetDocumentType: z.string().optional(),
  })
);

export type WorkerSessionStarting = z.infer<typeof WorkerSessionStartingSchema>;
