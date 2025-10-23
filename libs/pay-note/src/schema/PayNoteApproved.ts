import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const PayNoteApprovedSchema = withTypeBlueId(
  blueIds['PayNote Approved']
)(
  ResponseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
  })
);

export type PayNoteApproved = z.infer<typeof PayNoteApprovedSchema>;
