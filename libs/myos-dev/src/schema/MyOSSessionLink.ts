import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

export const MyOSSessionLinkSchema = withTypeBlueId(
  blueIds['MyOS Session Link']
)(
  LinkSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    sessionId: z.string().optional(),
  })
);

export type MyOSSessionLink = z.infer<typeof MyOSSessionLinkSchema>;
