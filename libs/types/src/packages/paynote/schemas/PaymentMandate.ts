import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { PaymentMandateChargeAttemptStateSchema } from './PaymentMandateChargeAttemptState';

export const PaymentMandateSchema = withTypeBlueId(
  blueIds['PayNote/Payment Mandate']
)(
  z.object({
    allowedPaymentCounterparties: z
      .array(
        z.object({
          counterpartyId: z.string().optional(),
          counterpartyType: z.string().optional(),
        })
      )
      .optional(),
    allowedPayNotes: z
      .array(
        z.object({
          documentBlueId: z.string().optional(),
          typeBlueId: z.string().optional(),
        })
      )
      .optional(),
    allowLinkedPayNote: z.boolean().optional(),
    amountCaptured: z.number().optional(),
    amountLimit: z.number().optional(),
    amountReserved: z.number().optional(),
    chargeAttempts: z
      .record(z.string(), PaymentMandateChargeAttemptStateSchema)
      .optional(),
    contracts: z
      .object({
        authorizeSpend: OperationSchema.optional(),
        authorizeSpendImpl: SequentialWorkflowOperationSchema.optional(),
        granteeChannel: MyOSTimelineChannelSchema.optional(),
        granterChannel: MyOSTimelineChannelSchema.optional(),
        guarantorChannel: MyOSTimelineChannelSchema.optional(),
        initialize: SequentialWorkflowSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        settleSpend: OperationSchema.optional(),
        settleSpendImpl: SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    currency: CurrencySchema.optional(),
    description: z.string().optional(),
    expiresAt: TimestampSchema.optional(),
    granteeId: z.string().optional(),
    granteeType: z.string().optional(),
    granterId: z.string().optional(),
    granterType: z.string().optional(),
    name: z.string().optional(),
    revokedAt: TimestampSchema.optional(),
    sourceAccount: z.string().optional(),
  })
);

export type PaymentMandate = z.infer<typeof PaymentMandateSchema>;
