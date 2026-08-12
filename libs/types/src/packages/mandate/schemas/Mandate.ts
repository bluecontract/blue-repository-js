import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CompositeTimelineChannelSchema } from '../../coordination/schemas/CompositeTimelineChannel';
import { ComputeDefinitionSchema } from '../../coordination/schemas/ComputeDefinition';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { StatusSchema } from '../../coordination/schemas/Status';
import { TimelineChannelSchema } from '../../coordination/schemas/TimelineChannel';
import { MandateValidationSchema } from './MandateValidation';

const zod = z as any;

export const MandateSchema: any = withTypeBlueId(blueIds['Mandate/Mandate'])(
  zod.object({
    activatedAt: zod.number().optional(),
    activateOnAuthorityConfirmation: zod.boolean().optional(),
    authorityConfirmedAt: zod.number().optional(),
    contracts: zod
      .object({
        applyMandateActivation: zod
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        applyMandateTermination: zod
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        authorityHolderChannel: zod.lazy(() => TimelineChannelSchema),
        authorizedActorChannel: zod.lazy(() => TimelineChannelSchema),
        confirmMandateAuthority: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        initializeMandate: zod.lazy(() => SequentialWorkflowSchema).optional(),
        mandateActivatedChannel: blueNodeField().optional(),
        mandateGuarantorChannel: zod.lazy(() => TimelineChannelSchema),
        mandateLifecycleChannel: blueNodeField().optional(),
        mandateLifecycleDefinition: zod
          .lazy(() => ComputeDefinitionSchema)
          .optional(),
        mandateTerminatedChannel: blueNodeField().optional(),
        mandateTerminationChannel: zod
          .lazy(() => CompositeTimelineChannelSchema)
          .optional(),
        terminateMandate: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    initializationError: zod.string().optional(),
    name: zod.string().optional(),
    status: zod.lazy(() => StatusSchema).optional(),
    terminatedAt: zod.number().optional(),
    validation: zod.lazy(() => MandateValidationSchema).optional(),
  })
);

export type Mandate = z.infer<typeof MandateSchema>;
