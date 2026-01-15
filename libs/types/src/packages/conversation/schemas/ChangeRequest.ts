import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { JsonPatchEntrySchema } from '../../core/schemas/JsonPatchEntry';

export const ChangeRequestSchema = withTypeBlueId(
  blueIds['Conversation/Change Request']
)(
  z.object({
    changeset: z.array(JsonPatchEntrySchema).optional(),
    changesetDescription: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ChangeRequest = z.infer<typeof ChangeRequestSchema>;
