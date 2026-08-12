import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { ChangeRequestSchema } from './ChangeRequest';

const zod = z as any;

export const ChangeOperationSchema: any = withTypeBlueId(
  blueIds['Workflows/Change Operation']
)(
  OperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: zod.lazy(() => ChangeRequestSchema).optional(),
  })
);

export type ChangeOperation = z.infer<typeof ChangeOperationSchema>;
