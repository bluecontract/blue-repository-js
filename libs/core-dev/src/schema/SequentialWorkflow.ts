import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';

export const SequentialWorkflowSchema = withTypeBlueId(
  blueIds['Sequential Workflow']
)(
  z.object({
    channel: z.unknown().optional(),
    description: z.string().optional(),
    event: blueNodeField().optional(),
    name: z.string().optional(),
    steps: z.unknown().optional(),
  })
);

export type SequentialWorkflow = z.infer<typeof SequentialWorkflowSchema>;
