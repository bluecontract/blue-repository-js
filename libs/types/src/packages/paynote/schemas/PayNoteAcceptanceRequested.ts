import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../conversation/schemas/Request';

export const PayNoteAcceptanceRequestedSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Acceptance Requested']
)(
  RequestSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type PayNoteAcceptanceRequested = z.infer<
  typeof PayNoteAcceptanceRequestedSchema
>;
