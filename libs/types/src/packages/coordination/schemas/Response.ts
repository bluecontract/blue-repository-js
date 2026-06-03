import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

const zod = z as any;

export const ResponseSchema: any = withTypeBlueId(
  blueIds['Coordination/Response']
)(
  EventSchema.extend({
    description: zod.string().optional(),
    inResponseTo: blueNodeField().optional(),
    name: zod.string().optional(),
  })
);

export type Response = z.infer<typeof ResponseSchema>;
