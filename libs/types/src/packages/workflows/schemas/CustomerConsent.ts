import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';

const zod = z as any;

export const CustomerConsentSchema: any = withTypeBlueId(
  blueIds['Workflows/Customer Consent']
)(
  zod.object({
    consentDetails: zod.record(zod.string(), zod.string()).optional(),
    consentKind: zod.string().optional(),
    consentStatus: zod.string().optional(),
    contracts: zod
      .object({
        granteeChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        granterChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        guarantorChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        initialize: zod.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: blueNodeField().optional(),
        revokeConsent: zod.lazy(() => OperationSchema).optional(),
        revokeConsentImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    description: zod.string().optional(),
    grantedAt: zod.lazy(() => TimestampSchema).optional(),
    name: zod.string().optional(),
    revocationReason: zod.string().optional(),
    revokedAt: zod.lazy(() => TimestampSchema).optional(),
  })
);

export type CustomerConsent = z.infer<typeof CustomerConsentSchema>;
