import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const PayNoteAcceptedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Accepted']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteAccepted = z.infer<typeof PayNoteAcceptedSchema>;
