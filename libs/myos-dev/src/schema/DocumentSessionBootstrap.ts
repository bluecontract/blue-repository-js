import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { blueNodeField, withTypeBlueId } from '@blue-labs/language';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import {
  DocumentStatusSchema,
  LifecycleEventChannelSchema,
  SequentialWorkflowSchema,
  TriggeredEventChannelSchema,
} from '@blue-repository/core-dev';

export const DocumentSessionBootstrapSchema = withTypeBlueId(
  blueIds['Document Session Bootstrap']
)(
  MyOSAdminBaseSchema.extend({
    bootstrapError: z.unknown().optional(),
    bootstrapStatus: DocumentStatusSchema.optional(),
    capabilities: z.unknown().optional(),
    channelBindings: z.unknown().optional(),
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
        defaultMessage: z.unknown().optional(),
        description: z.string().optional(),
        perChannel: z.unknown().optional(),
      })
      .optional(),
    initiatorSessionIds: z.unknown().optional(),
    name: z.string().optional(),
    participantsState: z.unknown().optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
