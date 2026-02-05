import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { OperationSchema } from './Operation';
import { SequentialWorkflowSchema } from './SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from './SequentialWorkflowOperation';

export const CustomerConsentSchema = withTypeBlueId(
  blueIds['Conversation/Customer Consent']
)(
  z.object({
    consentDetails: z.record(z.string(), z.string()).optional(),
    consentKind: z.string().optional(),
    consentStatus: z.string().optional(),
    contracts: z
      .object({
        granteeChannel: MyOSTimelineChannelSchema.optional(),
        granterChannel: MyOSTimelineChannelSchema.optional(),
        guarantorChannel: MyOSTimelineChannelSchema.optional(),
        initialize: SequentialWorkflowSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        revokeConsent: OperationSchema.optional(),
        revokeConsentImpl: SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    description: z.string().optional(),
    grantedAt: TimestampSchema.optional(),
    name: z.string().optional(),
    revocationReason: z.string().optional(),
    revokedAt: TimestampSchema.optional(),
  })
);

export type CustomerConsent = z.infer<typeof CustomerConsentSchema>;
