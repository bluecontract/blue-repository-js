import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '@blue-repository/core-dev';

export const ChildPayNoteIssuedSchema = withTypeBlueId(
  blueIds['Child PayNote Issued']
)(
  ResponseSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
  })
);

export type ChildPayNoteIssued = z.infer<typeof ChildPayNoteIssuedSchema>;
