import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

export const CdmEventWorkflowCustomisedWorkflowSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CustomisedWorkflow']
  )(
    z.object({
      description: z.string().optional(),
      itemName: z.string(),
      itemValue: z.string(),
      name: z.string().optional(),
    })
  );

export type CdmEventWorkflowCustomisedWorkflow = z.infer<
  typeof CdmEventWorkflowCustomisedWorkflowSchema
>;
