import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const ChildPayNoteIssuedSchema: any = withTypeBlueId(
  blueIds['PayNote/Child PayNote Issued']
)(
  ResponseSchema.extend({
    childPayNote: blueNodeField().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ChildPayNoteIssued = z.infer<typeof ChildPayNoteIssuedSchema>;
