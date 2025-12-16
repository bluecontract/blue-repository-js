import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const ChildPayNoteIssuanceDeclinedSchema = withTypeBlueId(blueIds['PayNote/Child PayNote Issuance Declined'])(
  ResponseSchema.extend({
    "reason": z.string().optional()
  })
);

export type ChildPayNoteIssuanceDeclined = z.infer<typeof ChildPayNoteIssuanceDeclinedSchema>;
