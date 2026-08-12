import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const LinkedPayNoteStartRespondedSchema: any = withTypeBlueId(
  blueIds['PayNote/Linked PayNote Start Responded']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
    status: zod.string().optional(),
  })
);

export type LinkedPayNoteStartResponded = z.infer<
  typeof LinkedPayNoteStartRespondedSchema
>;
