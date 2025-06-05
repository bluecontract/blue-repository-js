import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-company/language';
import { MyOSAgentSchema } from './MyOSAgent';

export const MyOSAgentChannelSchema = withTypeBlueId(blueIds.MyOSAgentChannel)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    agent: MyOSAgentSchema.optional(),
  })
);

export type MyOSAgentChannel = z.infer<typeof MyOSAgentChannelSchema>;
