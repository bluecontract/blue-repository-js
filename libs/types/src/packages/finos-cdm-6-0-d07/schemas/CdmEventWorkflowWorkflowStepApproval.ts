import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema } from './CdmBaseStaticdataPartyMetafieldsReferenceWithMetaParty';
import { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';

export const CdmEventWorkflowWorkflowStepApprovalSchema: z.ZodTypeAny =
  withTypeBlueId(
    blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowStepApproval']
  )(
    z.object({
      approved: z.boolean(),
      description: z.string().optional(),
      name: z.string().optional(),
      party: z.lazy(
        () => CdmBaseStaticdataPartyMetafieldsReferenceWithMetaPartySchema
      ),
      rejectedReason: z.string().optional(),
      timestamp: z.lazy(() => CdmEventWorkflowEventTimestampSchema),
    })
  );

export type CdmEventWorkflowWorkflowStepApproval = z.infer<
  typeof CdmEventWorkflowWorkflowStepApprovalSchema
>;
