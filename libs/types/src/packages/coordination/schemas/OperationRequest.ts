import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { RequestSchema } from './Request';

const zod = z as any;

export const OperationRequestSchema: any = withTypeBlueId(
  blueIds['Coordination/Operation Request']
)(
  RequestSchema.extend({
    channel: zod.string(),
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    name: zod.string().optional(),
    operation: zod.string(),
    request: blueNodeField().optional(),
    requireExactDocumentVersion: zod.boolean().optional(),
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
