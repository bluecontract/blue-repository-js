import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusInProgressSchema } from '../../coordination/schemas/StatusInProgress';

const zod = z as any;

export const StatusActiveSchema: any = withTypeBlueId(
  blueIds['Mandate/Status Active']
)(
  StatusInProgressSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusActive = z.infer<typeof StatusActiveSchema>;
