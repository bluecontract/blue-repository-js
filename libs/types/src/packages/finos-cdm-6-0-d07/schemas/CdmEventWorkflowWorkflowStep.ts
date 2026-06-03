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

const zod = z as any;

export const CdmEventWorkflowWorkflowStepSchema: any = withTypeBlueId(
  blueIds['FINOS-CDM-6.0-d07/cdm/event/workflow/WorkflowStep']
)(
  zod.object({
    account: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyAccountSchema))
      .min(0)
      .optional(),
    action: zod.lazy(() => CdmEventCommonActionEnumSchema).optional(),
    approval: zod
      .array(zod.lazy(() => CdmEventWorkflowWorkflowStepApprovalSchema))
      .min(0)
      .optional(),
    businessEvent: zod.lazy(() => CdmEventCommonBusinessEventSchema).optional(),
    counterpartyPositionBusinessEvent: zod
      .lazy(() => CdmEventCommonCounterpartyPositionBusinessEventSchema)
      .optional(),
    creditLimitInformation: zod
      .lazy(() => CdmEventWorkflowCreditLimitInformationSchema)
      .optional(),
    description: zod.string().optional(),
    eventIdentifier: zod
      .array(zod.lazy(() => CdmBaseStaticdataIdentifierIdentifierSchema))
      .min(1)
      .optional(),
    lineage: zod.lazy(() => CdmEventCommonLineageSchema).optional(),
    messageInformation: zod
      .lazy(() => CdmEventWorkflowMessageInformationSchema)
      .optional(),
    name: zod.string().optional(),
    nextEvent: zod
      .lazy(() => CdmEventWorkflowEventInstructionSchema)
      .optional(),
    party: zod
      .array(zod.lazy(() => CdmBaseStaticdataPartyPartySchema))
      .min(0)
      .optional(),
    previousWorkflowStep: zod
      .lazy(() => CdmEventWorkflowMetafieldsReferenceWithMetaWorkflowStepSchema)
      .optional(),
    proposedEvent: zod
      .lazy(() => CdmEventWorkflowEventInstructionSchema)
      .optional(),
    rejected: zod.boolean().optional(),
    timestamp: zod
      .array(zod.lazy(() => CdmEventWorkflowEventTimestampSchema))
      .min(1)
      .optional(),
    workflowState: zod
      .lazy(() => CdmEventWorkflowWorkflowStateSchema)
      .optional(),
  })
);

export type CdmEventWorkflowWorkflowStep = z.infer<
  typeof CdmEventWorkflowWorkflowStepSchema
>;
