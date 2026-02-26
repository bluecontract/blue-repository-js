import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const LinkedPayNoteStartFailedSchema = withTypeBlueId(
  blueIds['PayNote/Linked PayNote Start Failed']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.string().optional(),
  })
);

export type LinkedPayNoteStartFailed = z.infer<
  typeof LinkedPayNoteStartFailedSchema
>;
