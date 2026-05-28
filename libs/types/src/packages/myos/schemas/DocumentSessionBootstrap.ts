import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { DocumentStatusSchema } from '../../coordination/schemas/DocumentStatus';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { ChannelSchema } from '../../core/schemas/Channel';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { TriggeredEventChannelSchema } from '../../core/schemas/TriggeredEventChannel';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const DocumentSessionBootstrapSchema = withTypeBlueId(
  blueIds['MyOS/Document Session Bootstrap']
)(
  MyOSAdminBaseSchema.extend({
    avatarUrl: z.string().optional(),
    bootstrapError: z.string().optional(),
    bootstrapStatus: z.lazy(() => DocumentStatusSchema).optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    channelBindings: z
      .record(
        z.string(),
        z.lazy(() => ChannelSchema)
      )
      .optional(),
    contracts: z
      .object({
        handleBootstrapFailed: z
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        handleParticipantResolved: z
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        handleStatusChange: z.lazy(() => SequentialWorkflowSchema).optional(),
        handleTargetDocumentSessionStarted: z
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        initHandler: z.lazy(() => SequentialWorkflowSchema).optional(),
        lifecycle: z.lazy(() => LifecycleEventChannelSchema).optional(),
        triggeredEventsChannel: z
          .lazy(() => TriggeredEventChannelSchema)
          .optional(),
      })
      .optional(),
    description: z.string().optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        defaultMessage: z.string().optional(),
        description: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
    initiatorSessionIds: z.array(z.string()).optional(),
    name: z.string().optional(),
    participantsState: z
      .record(
        z.string(),
        z.lazy(() => ParticipantActivationStateSchema)
      )
      .optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
