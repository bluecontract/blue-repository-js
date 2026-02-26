import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const LinkedPayNoteStartRespondedSchema = withTypeBlueId(
  blueIds['PayNote/Linked PayNote Start Responded']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
  })
);

export type LinkedPayNoteStartResponded = z.infer<
  typeof LinkedPayNoteStartRespondedSchema
>;
