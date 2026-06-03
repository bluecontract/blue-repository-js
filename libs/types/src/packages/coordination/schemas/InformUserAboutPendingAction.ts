import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { EventSchema } from './Event';

const zod = z as any;

export const InformUserAboutPendingActionSchema: any = withTypeBlueId(
  blueIds['Coordination/Inform User About Pending Action']
)(
  EventSchema.extend({
    channel: zod.string().optional(),
    description: zod.string().optional(),
    expectedRequest: blueNodeField().optional(),
    message: zod.string().optional(),
    name: zod.string().optional(),
    operation: zod.string().optional(),
    title: zod.string().optional(),
  })
);

export type InformUserAboutPendingAction = z.infer<
  typeof InformUserAboutPendingActionSchema
>;
