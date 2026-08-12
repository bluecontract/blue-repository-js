import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';

const zod = z as any;

export const CdmEventWorkflowWorkflowStepApprovalSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowStepApproval']
)(
  zod.object({
    approved: zod.boolean(),
    description: zod.string().optional(),
    name: zod.string().optional(),
    party: zod.lazy(
      () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
    ),
    rejectedReason: zod.string().optional(),
    timestamp: zod.lazy(() => CdmEventWorkflowEventTimestampSchema),
  })
);

export type CdmEventWorkflowWorkflowStepApproval = z.infer<
  typeof CdmEventWorkflowWorkflowStepApprovalSchema
>;
