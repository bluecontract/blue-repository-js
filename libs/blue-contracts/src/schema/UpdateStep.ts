import { z } from 'zod';
import { withTypeBlueId } from '@blue-company/language';
import { blueIds } from '../blue-ids';
import { JsonPatchEntrySchema } from './JsonPatchEntry';

export const UpdateStepSchema = withTypeBlueId(blueIds.UpdateStep)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    changeset: z.array(JsonPatchEntrySchema).optional(),
  })
);

export type UpdateStep = z.infer<typeof UpdateStepSchema>;
