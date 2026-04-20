import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MarkerSchema } from '../../core/schemas/Marker';

export const ActorPolicySchema = withTypeBlueId(
  blueIds['Conversation/Actor Policy']
)(
  MarkerSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    operations: z
      .record(
        z.string(),
        z.object({
          excludeSource: z.string().optional(),
          requiresActor: z.string().optional(),
          requiresSource: z.string().optional(),
        })
      )
      .optional(),
  })
);

export type ActorPolicy = z.infer<typeof ActorPolicySchema>;
