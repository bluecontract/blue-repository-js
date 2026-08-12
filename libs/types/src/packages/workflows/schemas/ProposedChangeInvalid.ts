import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const ProposedChangeInvalidSchema: any = withTypeBlueId(
  blueIds['Workflows/Proposed Change Invalid']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type ProposedChangeInvalid = z.infer<typeof ProposedChangeInvalidSchema>;
