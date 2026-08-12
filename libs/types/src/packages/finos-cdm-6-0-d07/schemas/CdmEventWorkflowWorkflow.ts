import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowWorkflowStepSchema } from './CdmEventWorkflowWorkflowStep';

const zod = z as any;

export const CdmEventWorkflowWorkflowSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/Workflow']
)(
  zod.object({
    description: zod.string().optional(),
    name: zod.string().optional(),
    steps: zod
      .array(zod.lazy(() => CdmEventWorkflowWorkflowStepSchema))
      .min(1)
      .optional(),
  })
);

export type CdmEventWorkflowWorkflow = z.infer<
  typeof CdmEventWorkflowWorkflowSchema
>;
