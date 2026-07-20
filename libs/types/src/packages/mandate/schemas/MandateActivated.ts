import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MessageSchema } from '../../coordination/schemas/Message';

const zod = z as any;

export const MandateActivatedSchema: any = withTypeBlueId(
  blueIds['Mandate/Mandate Activated']
)(
  MessageSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type MandateActivated = z.infer<typeof MandateActivatedSchema>;
