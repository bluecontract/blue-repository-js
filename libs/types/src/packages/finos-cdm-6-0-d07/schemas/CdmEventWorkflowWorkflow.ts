import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';

export const CdmEventWorkflowWorkflowSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/Workflow']
)(
  z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    steps: z
      .array(z.lazy(() => CdmEventWorkflowWorkflowStepSchema))
      .min(1)
      .optional(),
  })
);

export type CdmEventWorkflowWorkflow = z.infer<
  typeof CdmEventWorkflowWorkflowSchema
>;
