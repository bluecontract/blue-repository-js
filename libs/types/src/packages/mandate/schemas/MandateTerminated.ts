import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { MessageSchema } from '../../coordination/schemas/Message';

const zod = z as any;

export const MandateTerminatedSchema: any = withTypeBlueId(
  blueIds['Mandate/Mandate Terminated']
)(
  MessageSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    reason: zod.string(),
  })
);

export type MandateTerminated = z.infer<typeof MandateTerminatedSchema>;
