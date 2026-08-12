import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ResponseSchema } from '../../coordination/schemas/Response';

const zod = z as any;

export const PayNoteAcceptedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Accepted']
)(
  ResponseSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteAccepted = z.infer<typeof PayNoteAcceptedSchema>;
