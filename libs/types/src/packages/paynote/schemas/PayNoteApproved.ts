import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayNoteApprovedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Approved']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteApproved = z.infer<typeof PayNoteApprovedSchema>;
