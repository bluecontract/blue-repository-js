import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { MyOSAgentSchema } from './MyOSAgent';

const zod = z as any;

export const MyOSAgentChannelSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Agent Channel']
)(
  zod.object({
    agent: zod.lazy(() => MyOSAgentSchema).optional(),
    description: zod.string().optional(),
    event: blueNodeField().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSAgentChannel = z.infer<typeof MyOSAgentChannelSchema>;
