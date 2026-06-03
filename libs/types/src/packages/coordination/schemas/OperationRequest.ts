import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

const zod = z as any;

export const OperationRequestSchema: any = withTypeBlueId(
  blueIds['Coordination/Operation Request']
)(
  zod.object({
    allowNewerVersion: zod.boolean().optional(),
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    name: zod.string().optional(),
    operation: zod.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
