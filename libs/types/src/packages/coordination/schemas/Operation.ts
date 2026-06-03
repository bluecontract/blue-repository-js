import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const OperationSchema: any = withTypeBlueId(
  blueIds['Coordination/Operation']
)(
  zod.object({
    channel: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type Operation = z.infer<typeof OperationSchema>;
