import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { ChangeRequestSchema } from './ChangeRequest';

const zod = z as any;

export const ProposeChangeOperationSchema: any = withTypeBlueId(
  blueIds['Workflows/Propose Change Operation']
)(
  OperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: zod.lazy(() => ChangeRequestSchema).optional(),
  })
);

export type ProposeChangeOperation = z.infer<
  typeof ProposeChangeOperationSchema
>;
