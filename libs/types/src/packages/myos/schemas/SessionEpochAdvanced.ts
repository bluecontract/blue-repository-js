import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SessionEpochAdvancedSchema = withTypeBlueId(
  blueIds['MyOS/Session Epoch Advanced']
)(
  EventSchema.extend({
    description: z.string().optional(),
    document: blueNodeField().optional(),
    epoch: z.number().optional(),
    name: z.string().optional(),
    sessionId: z.string().optional(),
    timestamp: z.string().optional(),
  })
);

export type SessionEpochAdvanced = z.infer<typeof SessionEpochAdvancedSchema>;
