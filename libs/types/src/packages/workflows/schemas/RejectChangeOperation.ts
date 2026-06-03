import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';

const zod = z as any;

export const RejectChangeOperationSchema: any = withTypeBlueId(
  blueIds['Workflows/Reject Change Operation']
)(
  OperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type RejectChangeOperation = z.infer<typeof RejectChangeOperationSchema>;
