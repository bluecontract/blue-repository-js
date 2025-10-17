import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SessionEpochAdvancedSchema = withTypeBlueId(
  blueIds['Session Epoch Advanced']
)(
  EventSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    update: z
      .object({
        description: z.string().optional(),
        targetSessionId: z.string().optional(),
        document: blueNodeField().optional(),
        timestamp: z.string().optional(),
      })
      .optional(),
  })
);

export type SessionEpochAdvanced = z.infer<typeof SessionEpochAdvancedSchema>;
