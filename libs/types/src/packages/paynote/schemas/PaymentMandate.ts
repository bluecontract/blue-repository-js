import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';

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
      .record(
        z.string(),
        z.object({
          amountMinor: z.number().optional(),
          authorizationReason: z.string().optional(),
          authorizationRespondedAt: z.lazy(() => TimestampSchema).optional(),
          authorizationStatus: z.string().optional(),
          authorizedAmountMinor: z.number().optional(),
          capturedDeltaMinor: z.number().optional(),
          chargeMode: z.string().optional(),
          counterpartyId: z.string().optional(),
          counterpartyType: z.string().optional(),
          currency: z.lazy(() => CurrencySchema).optional(),
          holdId: z.string().optional(),
          lastSettlementId: z.string().optional(),
          lastSettlementProcessingStatus: z.string().optional(),
          lastSettlementRequestStatus: z.string().optional(),
          reservedDeltaMinor: z.number().optional(),
          settled: z.boolean().optional(),
          settlementReason: z.string().optional(),
          settlementRespondedAt: z.lazy(() => TimestampSchema).optional(),
          transactionId: z.string().optional(),
        })
      )
      .optional(),
    contracts: z
      .object({
        authorizeSpend: z.lazy(() => OperationSchema).optional(),
        authorizeSpendImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        granteeChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        granterChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        guarantorChannel: z.lazy(() => MyOSTimelineChannelSchema).optional(),
        initialize: z.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        settleSpend: z.lazy(() => OperationSchema).optional(),
        settleSpendImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    currency: z.lazy(() => CurrencySchema).optional(),
    description: z.string().optional(),
    expiresAt: z.lazy(() => TimestampSchema).optional(),
    granteeId: z.string().optional(),
    granteeType: z.string().optional(),
    granterId: z.string().optional(),
    granterType: z.string().optional(),
    name: z.string().optional(),
    revokedAt: z.lazy(() => TimestampSchema).optional(),
    sourceAccount: z.string().optional(),
  })
);

export type PaymentMandate = z.infer<typeof PaymentMandateSchema>;
