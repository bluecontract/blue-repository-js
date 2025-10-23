import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MyOSAgentSchema } from './MyOSAgent';

export const MyOSAgentChannelSchema = withTypeBlueId(
  blueIds['MyOS Agent Channel']
)(
  z.object({
    agent: MyOSAgentSchema.optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
  })
);

export type MyOSAgentChannel = z.infer<typeof MyOSAgentChannelSchema>;
