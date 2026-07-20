import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ActorSchema } from './Actor';
import { AuthoritySchema } from './Authority';
import { SourceSchema } from './Source';
import { TimelineSchema } from './Timeline';

const zod = z as any;

export const TimelineEntrySchema: any = withTypeBlueId(
  blueIds['Coordination/Timeline Entry']
)(
  zod.object({
    actor: zod.lazy(() => ActorSchema),
    description: zod.string().optional(),
    message: blueNodeField(),
    name: zod.string().optional(),
    onBehalfOf: zod.lazy(() => AuthoritySchema).optional(),
    prevEntry: blueNodeField().optional(),
    source: zod.lazy(() => SourceSchema).optional(),
    timeline: zod.lazy(() => TimelineSchema),
    timestamp: zod.number(),
  })
);

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;
