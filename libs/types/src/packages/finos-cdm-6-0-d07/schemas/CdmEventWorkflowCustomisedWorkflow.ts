import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';

const zod = z as any;

export const CdmEventWorkflowCustomisedWorkflowSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/CustomisedWorkflow']
)(
  zod.object({
    description: zod.string().optional(),
    itemName: zod.string(),
    itemValue: zod.string(),
    name: zod.string().optional(),
  })
);

export type CdmEventWorkflowCustomisedWorkflow = z.infer<
  typeof CdmEventWorkflowCustomisedWorkflowSchema
>;
