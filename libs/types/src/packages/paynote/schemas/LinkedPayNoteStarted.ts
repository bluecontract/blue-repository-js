import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const LinkedPayNoteStartedSchema = withTypeBlueId(
  blueIds['PayNote/Linked PayNote Started']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    payNoteDocumentId: z.string().optional(),
    payNoteSessionId: z.string().optional(),
  })
);

export type LinkedPayNoteStarted = z.infer<typeof LinkedPayNoteStartedSchema>;
