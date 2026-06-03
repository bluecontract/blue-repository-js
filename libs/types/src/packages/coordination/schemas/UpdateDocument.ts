import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { SequentialWorkflowStepSchema } from './SequentialWorkflowStep';

const zod = z as any;

export const UpdateDocumentSchema: any = withTypeBlueId(
  blueIds['Coordination/Update Document']
)(
  SequentialWorkflowStepSchema.extend({
    changeset: zod.array(blueNodeField()).optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
  })
);

export type UpdateDocument = z.infer<typeof UpdateDocumentSchema>;
