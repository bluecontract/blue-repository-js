import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';

export const CustomerConsentSchema = withTypeBlueId(
  blueIds['Workflows/Customer Consent']
)(
  z.object({
    consentDetails: z.record(z.string(), z.string()).optional(),
    consentKind: z.string().optional(),
    consentStatus: z.string().optional(),
    contracts: z
      .object({
        granteeChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        granterChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        guarantorChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        initialize: z.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        revokeConsent: z.lazy(() => OperationSchema).optional(),
        revokeConsentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: z.string().optional(),
    grantedAt: z.lazy(() => TimestampSchema).optional(),
    name: z.string().optional(),
    revocationReason: z.string().optional(),
    revokedAt: z.lazy(() => TimestampSchema).optional(),
  })
);

export type CustomerConsent = z.infer<typeof CustomerConsentSchema>;
