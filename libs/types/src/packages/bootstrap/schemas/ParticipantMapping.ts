import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const ParticipantMappingSchema: any = withTypeBlueId(
  blueIds['Bootstrap/Participant Mapping']
)(
  zod.object({
    accountId: zod.string().optional(),
    channelName: zod.string(),
    description: zod.string().optional(),
    email: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type ParticipantMapping = z.infer<typeof ParticipantMappingSchema>;
