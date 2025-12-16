import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';

export const OperationRequestSchema = withTypeBlueId(blueIds['Conversation/Operation Request'])(
  z.object({
    "operation": z.string().optional(),
    "request": blueNodeField().optional(),
    "document": blueNodeField().optional(),
    "allowNewerVersion": z.boolean().optional()
  })
);

export type OperationRequest = z.infer<typeof OperationRequestSchema>;
