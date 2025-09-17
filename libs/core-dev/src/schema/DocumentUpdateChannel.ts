import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { InternalEventsChannelSchema } from './InternalEventsChannel';

export const DocumentUpdateChannelSchema = withTypeBlueId(
  blueIds['Document Update Channel']
)(
  InternalEventsChannelSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    path: z.string().optional(),
  })
);

export type DocumentUpdateChannel = z.infer<typeof DocumentUpdateChannelSchema>;
