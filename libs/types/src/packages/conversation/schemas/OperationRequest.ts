import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

export const OperationRequestSchema = withTypeBlueId(
  blueIds['Conversation/Operation Request']
)(
  z.object({
    allowNewerVersion: z.boolean().optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    name: z.string().optional(),
    operation: z.string().optional(),
    request: blueNodeField().optional(),
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
