import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const LinkedPayNoteStartedSchema: any = withTypeBlueId(
  blueIds['PayNote/Linked PayNote Started']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    payNoteDocumentId: zod.string().optional(),
    payNoteSessionId: zod.string().optional(),
  })
);

export type LinkedPayNoteStarted = z.infer<typeof LinkedPayNoteStartedSchema>;
