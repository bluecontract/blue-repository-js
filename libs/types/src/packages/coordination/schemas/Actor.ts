import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ActorSchema: any = withTypeBlueId(blueIds['Coordination/Actor'])(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Actor = z.infer<typeof ActorSchema>;
