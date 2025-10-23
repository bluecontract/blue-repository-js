import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import {
  ChannelSchema,
  DocumentStatusSchema,
  LifecycleEventChannelSchema,
  SequentialWorkflowSchema,
  TriggeredEventChannelSchema,
} from '@blue-repository/core-dev';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

export const DocumentSessionBootstrapSchema = withTypeBlueId(
  blueIds['Document Session Bootstrap']
)(
  MyOSAdminBaseSchema.extend({
    bootstrapError: z.string().optional(),
    bootstrapStatus: DocumentStatusSchema.optional(),
    capabilities: z.record(z.string(), z.boolean()).optional(),
    channelBindings: z.record(z.string(), ChannelSchema).optional(),
    contracts: z
      .object({
        handleBootstrapFailed: SequentialWorkflowSchema.optional(),
        handleParticipantResolved: SequentialWorkflowSchema.optional(),
        handleStatusChange: SequentialWorkflowSchema.optional(),
        handleTargetDocumentSessionStarted: SequentialWorkflowSchema.optional(),
        initHandler: SequentialWorkflowSchema.optional(),
        lifecycle: LifecycleEventChannelSchema.optional(),
        triggeredEventsChannel: TriggeredEventChannelSchema.optional(),
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
      .record(z.string(), ParticipantActivationStateSchema)
      .optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
