import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const AllTimelinesChannelSchema: any = withTypeBlueId(
  blueIds['Coordination/All Timelines Channel']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type AllTimelinesChannel = z.infer<typeof AllTimelinesChannelSchema>;
