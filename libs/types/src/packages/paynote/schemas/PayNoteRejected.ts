import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayNoteRejectedSchema = withTypeBlueId(blueIds['PayNote/PayNote Rejected'])(
  ResponseSchema.extend({
    "reason": z.string().optional()
  })
);

export type PayNoteRejected = z.infer<typeof PayNoteRejectedSchema>;
