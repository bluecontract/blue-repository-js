import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const SessionEpochAdvancedSchema: any = withTypeBlueId(
  blueIds['MyOS/Session Epoch Advanced']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    epoch: zod.number().optional(),
    name: zod.string().optional(),
    sessionId: zod.string().optional(),
    timestamp: zod.string().optional(),
  })
);

export type SessionEpochAdvanced = z.infer<typeof SessionEpochAdvancedSchema>;
