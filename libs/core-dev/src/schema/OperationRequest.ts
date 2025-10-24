import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const OperationRequestSchema = withTypeBlueId(
  blueIds['Operation Request']
)(
  z.object({
    allowNewerVersion: z.unknown().optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    name: z.string().optional(),
    operation: z.unknown().optional(),
    request: blueNodeField().optional(),
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
