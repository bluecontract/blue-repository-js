import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const EventSchema: any = withTypeBlueId(blueIds['Coordination/Event'])(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type Event = z.infer<typeof EventSchema>;
