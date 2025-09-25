import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';
import {
  ChannelSchema,
  DocumentStatusSchema,
  LifecycleEventChannelSchema,
  SequentialWorkflowSchema,
  TriggeredEventChannelSchema,
} from '@blue-repository/core-dev';

export const DocumentSessionBootstrapSchema = withTypeBlueId(
  blueIds['Document Session Bootstrap']
)(
  MyOSAdminBaseSchema.extend({
    name: z.string().optional(),
    description: z.string().optional(),
    participantsState: z
      .record(z.string(), ParticipantActivationStateSchema)
      .optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    bootstrapStatus: DocumentStatusSchema.optional(),
    document: blueNodeField().optional(),
    initialMessages: z
      .object({
        description: z.string().optional(),
        defaultMessage: z.string().optional(),
        perChannel: z.record(z.string(), z.string()).optional(),
      })
      .optional(),
    bootstrapError: z.string().optional(),
    initiatorSessionIds: z.array(z.string()).optional(),
    contracts: z
      .object({
        lifecycle: LifecycleEventChannelSchema.optional(),
        handleStatusChange: SequentialWorkflowSchema.optional(),
        initHandler: SequentialWorkflowSchema.optional(),
        handleParticipantResolved: SequentialWorkflowSchema.optional(),
        handleTargetDocumentSessionStarted: SequentialWorkflowSchema.optional(),
        handleBootstrapFailed: SequentialWorkflowSchema.optional(),
        triggeredEventsChannel: TriggeredEventChannelSchema.optional(),
      })
      .optional(),
    channelBindings: z.record(z.string(), ChannelSchema).optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
