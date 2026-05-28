import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { ChangeRequestSchema } from './ChangeRequest';
import { OperationSchema } from './Operation';

export const ProposeChangeOperationSchema = withTypeBlueId(
  blueIds['Coordination/Propose Change Operation']
)(
  OperationSchema.extend({
    description: z.string().optional(),
    name: z.string().optional(),
    request: z.lazy(() => ChangeRequestSchema).optional(),
  })
);

export type ProposeChangeOperation = z.infer<
  typeof ProposeChangeOperationSchema
>;
