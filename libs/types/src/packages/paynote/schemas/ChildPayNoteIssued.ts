import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../conversation/schemas/Response';

export const ChildPayNoteIssuedSchema = withTypeBlueId(blueIds['PayNote/Child PayNote Issued'])(
  ResponseSchema.extend({
    "childPayNote": blueNodeField().optional()
  })
);

export type ChildPayNoteIssued = z.infer<typeof ChildPayNoteIssuedSchema>;
