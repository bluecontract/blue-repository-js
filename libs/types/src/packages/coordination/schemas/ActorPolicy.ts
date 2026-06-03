import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ActorPolicySchema: any = withTypeBlueId(
  blueIds['Coordination/Actor Policy']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    operations: zod
      .record(
        zod.string(),
        zod.object({
          excludeSource: zod
            .enum(['browserSession', 'apiCall', 'documentRequest'] as [
              string,
              ...string[]
            ])
            .optional(),
          requiresActor: zod
            .enum(['principal', 'agent', 'any'] as [string, ...string[]])
            .optional(),
          requiresSource: zod
            .enum(['browserSession', 'apiCall', 'documentRequest'] as [
              string,
              ...string[]
            ])
            .optional(),
        })
      )
      .optional(),
  })
);

export type ActorPolicy = z.infer<typeof ActorPolicySchema>;
