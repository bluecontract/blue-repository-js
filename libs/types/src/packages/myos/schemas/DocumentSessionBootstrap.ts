import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { DocumentStatusSchema } from '../../coordination/schemas/DocumentStatus';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { MyOSAdminBaseSchema } from './MyOSAdminBase';
import { ParticipantActivationStateSchema } from './ParticipantActivationState';

const zod = z as any;

export const DocumentSessionBootstrapSchema: any = withTypeBlueId(
  blueIds['MyOS/Document Session Bootstrap']
)(
  MyOSAdminBaseSchema.extend({
    avatarUrl: zod.string().optional(),
    bootstrapError: zod.string().optional(),
    bootstrapStatus: zod.lazy(() => DocumentStatusSchema).optional(),
    capabilities: zod.record(zod.string(), zod.boolean()).optional(),
    channelBindings: zod.record(zod.string(), blueNodeField()).optional(),
    contracts: zod
      .object({
        handleBootstrapFailed: zod
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        handleParticipantResolved: zod
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        handleStatusChange: zod.lazy(() => SequentialWorkflowSchema).optional(),
        handleTargetDocumentSessionStarted: zod
          .lazy(() => SequentialWorkflowSchema)
          .optional(),
        initHandler: zod.lazy(() => SequentialWorkflowSchema).optional(),
        lifecycle: blueNodeField().optional(),
        triggeredEventsChannel: blueNodeField().optional(),
      })
      .optional(),
    description: zod.string().optional(),
    document: blueNodeField().optional(),
    initialMessages: zod
      .object({
        defaultMessage: zod.string().optional(),
        description: zod.string().optional(),
        perChannel: zod.record(zod.string(), zod.string()).optional(),
      })
      .optional(),
    initiatorSessionIds: zod.array(zod.string()).optional(),
    name: zod.string().optional(),
    participantsState: zod
      .record(
        zod.string(),
        zod.lazy(() => ParticipantActivationStateSchema)
      )
      .optional(),
  })
);

export type DocumentSessionBootstrap = z.infer<
  typeof DocumentSessionBootstrapSchema
>;
