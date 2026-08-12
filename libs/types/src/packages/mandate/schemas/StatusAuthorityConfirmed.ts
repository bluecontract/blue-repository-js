import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { StatusInProgressSchema } from '../../coordination/schemas/StatusInProgress';

const zod = z as any;

export const StatusAuthorityConfirmedSchema: any = withTypeBlueId(
  blueIds['Mandate/Status Authority Confirmed']
)(
  StatusInProgressSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type StatusAuthorityConfirmed = z.infer<
  typeof StatusAuthorityConfirmedSchema
>;
