import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '@blue-repository/core-dev';

export const SessionEpochAdvancedSchema = withTypeBlueId(
  blueIds['Session Epoch Advanced']
)(
  EventSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    update: z
      .object({
        description: z.string().optional(),
        document: blueNodeField().optional(),
        targetSessionId: z.string().optional(),
        timestamp: z.string().optional(),
      })
      .optional(),
  })
);

export type SessionEpochAdvanced = z.infer<typeof SessionEpochAdvancedSchema>;
