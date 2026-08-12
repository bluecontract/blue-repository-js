import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const TargetDocumentSessionStartedSchema: any = withTypeBlueId(
  blueIds['MyOS/Target Document Session Started']
)(
  EventSchema.extend({
    document: blueNodeField().optional(),
    initiatorSessionIds: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
  })
);

export type TargetDocumentSessionStarted = z.infer<
  typeof TargetDocumentSessionStartedSchema
>;
