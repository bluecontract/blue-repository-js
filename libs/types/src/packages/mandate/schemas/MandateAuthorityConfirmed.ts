import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MessageSchema } from '../../coordination/schemas/Message';

const zod = z as any;

export const MandateAuthorityConfirmedSchema: any = withTypeBlueId(
  blueIds['Mandate/Mandate Authority Confirmed']
)(
  MessageSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    timestampUs: zod.number(),
  })
);

export type MandateAuthorityConfirmed = z.infer<
  typeof MandateAuthorityConfirmedSchema
>;
