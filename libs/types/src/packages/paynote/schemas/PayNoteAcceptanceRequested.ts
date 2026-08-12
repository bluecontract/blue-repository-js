import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { RequestSchema } from '../../coordination/schemas/Request';

const zod = z as any;

export const PayNoteAcceptanceRequestedSchema: any = withTypeBlueId(
  blueIds['PayNote/PayNote Acceptance Requested']
)(
  RequestSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type PayNoteAcceptanceRequested = z.infer<
  typeof PayNoteAcceptanceRequestedSchema
>;
