import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../conversation/schemas/Event';

export const SessionEpochAdvancedSchema = withTypeBlueId(blueIds['MyOS/Session Epoch Advanced'])(
  EventSchema.extend({
    "sessionId": z.string().optional(),
    "timestamp": z.string().optional(),
    "epoch": z.number().int().optional(),
    "document": blueNodeField().optional()
  })
);

export type SessionEpochAdvanced = z.infer<typeof SessionEpochAdvancedSchema>;
