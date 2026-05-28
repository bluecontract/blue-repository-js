import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
import { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
import { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';

export const CdmEventWorkflowWorkflowStateSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowState']
)(
  z.object({
    comment: z.string().optional(),
    description: z.string().optional(),
    name: z.string().optional(),
    partyCustomisedWorkflow: z
      .array(z.lazy(() => CdmEventWorkflowPartyCustomisedWorkflowSchema))
      .min(0)
      .optional(),
    warehouseIdentity: z
      .lazy(() => CdmEventWorkflowWarehouseIdentityEnumSchema)
      .optional(),
    workflowStatus: z.lazy(() => CdmEventWorkflowWorkflowStatusEnumSchema),
  })
);

export type CdmEventWorkflowWorkflowState = z.infer<
  typeof CdmEventWorkflowWorkflowStateSchema
>;
