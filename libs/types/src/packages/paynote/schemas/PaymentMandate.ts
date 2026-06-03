import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { TimestampSchema } from '../../common/schemas/Timestamp';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';

const zod = z as any;

export const PaymentMandateSchema: any = withTypeBlueId(
  blueIds['PayNote/Payment Mandate']
)(
  zod.object({
    allowedPaymentCounterparties: zod
      .array(
        zod.object({
          counterpartyId: zod.string().optional(),
          counterpartyType: zod.string().optional(),
        })
      )
      .optional(),
    allowedPayNotes: zod
      .array(
        zod.object({
          documentBlueId: zod.string().optional(),
          typeBlueId: zod.string().optional(),
        })
      )
      .optional(),
    allowLinkedPayNote: zod.boolean().optional(),
    amountCaptured: zod.number().optional(),
    amountLimit: zod.number().optional(),
    amountReserved: zod.number().optional(),
    chargeAttempts: zod
      .record(
        zod.string(),
        zod.object({
          amountMinor: zod.number().optional(),
          authorizationReason: zod.string().optional(),
          authorizationRespondedAt: zod.lazy(() => TimestampSchema).optional(),
          authorizationStatus: zod.string().optional(),
          authorizedAmountMinor: zod.number().optional(),
          capturedDeltaMinor: zod.number().optional(),
          chargeMode: zod.string().optional(),
          counterpartyId: zod.string().optional(),
          counterpartyType: zod.string().optional(),
          currency: zod.lazy(() => CurrencySchema).optional(),
          holdId: zod.string().optional(),
          lastSettlementId: zod.string().optional(),
          lastSettlementProcessingStatus: zod.string().optional(),
          lastSettlementRequestStatus: zod.string().optional(),
          reservedDeltaMinor: zod.number().optional(),
          settled: zod.boolean().optional(),
          settlementReason: zod.string().optional(),
          settlementRespondedAt: zod.lazy(() => TimestampSchema).optional(),
          transactionId: zod.string().optional(),
        })
      )
      .optional(),
    contracts: zod
      .object({
        authorizeSpend: zod.lazy(() => OperationSchema).optional(),
        authorizeSpendImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        granteeChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        granterChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        guarantorChannel: zod.lazy(() => MyOSTimelineChannelSchema).optional(),
        initialize: zod.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: blueNodeField().optional(),
        settleSpend: zod.lazy(() => OperationSchema).optional(),
        settleSpendImpl: zod
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    currency: zod.lazy(() => CurrencySchema).optional(),
    description: zod.string().optional(),
    expiresAt: zod.lazy(() => TimestampSchema).optional(),
    granteeId: zod.string().optional(),
    granteeType: zod.string().optional(),
    granterId: zod.string().optional(),
    granterType: zod.string().optional(),
    name: zod.string().optional(),
    revokedAt: zod.lazy(() => TimestampSchema).optional(),
    sourceAccount: zod.string().optional(),
  })
);

export type PaymentMandate = z.infer<typeof PaymentMandateSchema>;
