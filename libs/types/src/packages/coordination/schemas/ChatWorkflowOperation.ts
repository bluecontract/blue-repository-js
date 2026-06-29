import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { ChatMessageSchema } from './ChatMessage';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';

const zod = z as any;

export const ChatWorkflowOperationSchema: any = withTypeBlueId(
  blueIds['Coordination/Chat Workflow Operation']
)(
  SequentialWorkflowOperationSchema.extend({
    description: zod.string().optional(),
    name: zod.string().optional(),
    request: zod.lazy(() => ChatMessageSchema).optional(),
    steps: blueNodeField().optional(),
  })
);

export type ChatWorkflowOperation = z.infer<typeof ChatWorkflowOperationSchema>;
