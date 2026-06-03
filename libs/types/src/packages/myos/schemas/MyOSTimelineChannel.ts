import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimelineChannelSchema } from '../../coordination/schemas/TimelineChannel';

const zod = z as any;

export const MyOSTimelineChannelSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Timeline Channel']
)(
  TimelineChannelSchema.extend({
    accountId: zod.string().optional(),
    description: zod.string().optional(),
    email: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MyOSTimelineChannel = z.infer<typeof MyOSTimelineChannelSchema>;
