import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const OperationRequestSchema = withTypeBlueId(
  blueIds['Operation Request']
)(
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    request: blueNodeField().optional(),
    operation: z.string().optional(),
    document: blueNodeField().optional(),
    allowNewerVersion: z.boolean().optional(),
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
