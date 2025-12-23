import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayNoteApprovedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Approved']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteApproved = z.infer<typeof PayNoteApprovedSchema>;
