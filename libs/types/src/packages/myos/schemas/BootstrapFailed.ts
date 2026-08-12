import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { EventSchema } from '../../coordination/schemas/Event';

const zod = z as any;

export const BootstrapFailedSchema: any = withTypeBlueId(
  blueIds['MyOS/Bootstrap Failed']
)(
  EventSchema.extend({
    name: zod.string().optional(),
    reason: zod.string().optional(),
  })
);

export type BootstrapFailed = z.infer<typeof BootstrapFailedSchema>;
