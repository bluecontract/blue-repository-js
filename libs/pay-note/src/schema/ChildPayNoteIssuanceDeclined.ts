import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const ChildPayNoteIssuanceDeclinedSchema = withTypeBlueId(
  blueIds['Child PayNote Issuance Declined']
)(
  ResponseSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    reason: z.unknown().optional(),
  })
);

export type ChildPayNoteIssuanceDeclined = z.infer<
  typeof ChildPayNoteIssuanceDeclinedSchema
>;
