import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { LinkSchema } from './Link';

const zod = z as any;

export const MyOSSessionLinkSchema: any = withTypeBlueId(
  blueIds['MyOS/MyOS Session Link']
)(
  LinkSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    sessionId: zod.string().optional(),
  })
);

export type MyOSSessionLink = z.infer<typeof MyOSSessionLinkSchema>;
