import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const MyOSSessionLinkSchema = withTypeBlueId(
  blueIds['MyOS/MyOS Session Link']
)(
  LinkSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    sessionId: z.string().optional(),
  })
);

export type MyOSSessionLink = z.infer<typeof MyOSSessionLinkSchema>;
