import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CdmBaseStaticdataIdentifierIdentifierSchema } from './CdmBaseStaticdataIdentifierIdentifier';
import { CdmBaseStaticdataPartyAccountSchema } from './CdmBaseStaticdataPartyAccount';
import { CdmBaseStaticdataPartyPartySchema } from './CdmBaseStaticdataPartyParty';
import { CdmEventCommonActionEnumSchema } from './CdmEventCommonActionEnum';
import { CdmEventCommonBusinessEventSchema } from './CdmEventCommonBusinessEvent';
import { CdmEventCommonCounterpartyPositionBusinessEventSchema } from './CdmEventCommonCounterpartyPositionBusinessEvent';
import { CdmEventCommonLineageSchema } from './CdmEventCommonLineage';
import { CdmEventWorkflowCreditLimitInformationSchema } from './CdmEventWorkflowCreditLimitInformation';
import { CdmEventWorkflowEventInstructionSchema } from './CdmEventWorkflowEventInstruction';
import { CdmEventWorkflowEventTimestampSchema } from './CdmEventWorkflowEventTimestamp';
import { CdmEventWorkflowMessageInformationSchema } from './CdmEventWorkflowMessageInformation';
import { CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema } from './CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStep';
import { CdmEventWorkflowWorkflowStateSchema } from './CdmEventWorkflowWorkflowState';
import { CdmEventWorkflowWorkflowStepApprovalSchema } from './CdmEventWorkflowWorkflowStepApproval';

export const CdmEventWorkflowWorkflowStepSchema: z.ZodTypeAny = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowStep']
)(
  z.object({
    account: z
      .array(z.lazy(() => CdmBaseStaticdataPartyAccountSchema))
      .min(0)
      .optional(),
    action: z.lazy(() => CdmEventCommonActionEnumSchema).optional(),
    approval: z
      .array(z.lazy(() => CdmEventWorkflowWorkflowStepApprovalSchema))
      .min(0)
      .optional(),
    businessEvent: z.lazy(() => CdmEventCommonBusinessEventSchema).optional(),
    counterpartyPositionBusinessEvent: z
      .lazy(() => CdmEventCommonCounterpartyPositionBusinessEventSchema)
      .optional(),
    creditLimitInformation: z
      .lazy(() => CdmEventWorkflowCreditLimitInformationSchema)
      .optional(),
    description: z.string().optional(),
    eventIdentifier: z
      .array(z.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
      .min(1)
      .optional(),
    lineage: z.lazy(() => CdmEventCommonLineageSchema).optional(),
    messageInformation: z
      .lazy(() => CdmEventWorkflowMessageInformationSchema)
      .optional(),
    name: z.string().optional(),
    nextEvent: z.lazy(() => CdmEventWorkflowEventInstructionSchema).optional(),
    party: z
      .array(z.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    previousWorkflowStep: z
      .lazy(() => CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema)
      .optional(),
    proposedEvent: z
      .lazy(() => CdmEventWorkflowEventInstructionSchema)
      .optional(),
    rejected: z.boolean().optional(),
    timestamp: z
      .array(z.lazy(() => CdmEventWorkflowEventTimestampSchema))
      .min(1)
      .optional(),
    workflowState: z.lazy(() => CdmEventWorkflowWorkflowStateSchema).optional(),
  })
);

export type CdmEventWorkflowWorkflowStep = z.infer<
  typeof CdmEventWorkflowWorkflowStepSchema
>;
