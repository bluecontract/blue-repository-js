import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmEventWorkflowPartyCustomisedWorkflowSchema } from './CdmEventWorkflowPartyCustomisedWorkflow';
import { CdmEventWorkflowWarehouseIdentityEnumSchema } from './CdmEventWorkflowWarehouseIdentityEnum';
import { CdmEventWorkflowWorkflowStatusEnumSchema } from './CdmEventWorkflowWorkflowStatusEnum';

const zod = z as any;

export const CdmEventWorkflowWorkflowStateSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowState']
)(
  zod.object({
    comment: zod.string().optional(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    partyCustomisedWorkflow: zod
      .array(zod.lazy(() => CdmEventWorkflowPartyCustomisedWorkflowSchema))
      .min(0)
      .optional(),
    warehouseIdentity: zod
      .lazy(() => CdmEventWorkflowWarehouseIdentityEnumSchema)
      .optional(),
    workflowStatus: zod.lazy(() => CdmEventWorkflowWorkflowStatusEnumSchema),
  })
);

export type CdmEventWorkflowWorkflowState = z.infer<
  typeof CdmEventWorkflowWorkflowStateSchema
>;
