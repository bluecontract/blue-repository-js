import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId } from '@blue-labs/language';
import { DocumentStatusSchema } from '../../conversation/schemas/DocumentStatus';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { TriggeredEventChannelSchema } from '../../core/schemas/TriggeredEventChannel';
import { MyOSTimelineChannelSchema } from '../../myos/schemas/MyOSTimelineChannel';
import { CardTransactionReportSchema } from './CardTransactionReport';

export const PayNoteVoucherSchema = withTypeBlueId(
  blueIds['PayNote/PayNote Voucher']
)(
  z.object({
    activatedAt: z.number().optional(),
    contracts: z
      .object({
        activateVoucher: OperationSchema.optional(),
        activateVoucherImpl: SequentialWorkflowOperationSchema.optional(),
        confirmCardTransactionMonitoringStarted: OperationSchema.optional(),
        confirmCardTransactionMonitoringStartedImpl:
          SequentialWorkflowOperationSchema.optional(),
        confirmFundsCaptured: OperationSchema.optional(),
        confirmFundsCapturedImpl: SequentialWorkflowOperationSchema.optional(),
        confirmFundsReserved: OperationSchema.optional(),
        confirmFundsReservedImpl: SequentialWorkflowOperationSchema.optional(),
        confirmReservationReleased: OperationSchema.optional(),
        confirmReservationReleasedImpl:
          SequentialWorkflowOperationSchema.optional(),
        eventsChannel: TriggeredEventChannelSchema.optional(),
        guarantorChannel: MyOSTimelineChannelSchema.optional(),
        handleCaptureDeclined: SequentialWorkflowSchema.optional(),
        handleCaptureFailed: SequentialWorkflowSchema.optional(),
        handleEligibleCardTransactionReported:
          SequentialWorkflowSchema.optional(),
        handleFundsCaptured: SequentialWorkflowSchema.optional(),
        handleFundsReserved: SequentialWorkflowSchema.optional(),
        handleReservationDeclined: SequentialWorkflowSchema.optional(),
        handleReservationReleased: SequentialWorkflowSchema.optional(),
        handleReservationReleaseDeclined: SequentialWorkflowSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        payeeChannel: MyOSTimelineChannelSchema.optional(),
        payerChannel: MyOSTimelineChannelSchema.optional(),
        rejectCardTransactionMonitoringRequest: OperationSchema.optional(),
        rejectCardTransactionMonitoringRequestImpl:
          SequentialWorkflowOperationSchema.optional(),
        rejectVoucher: OperationSchema.optional(),
        rejectVoucherImpl: SequentialWorkflowOperationSchema.optional(),
        reportCaptureDeclined: OperationSchema.optional(),
        reportCaptureDeclinedImpl: SequentialWorkflowOperationSchema.optional(),
        reportCaptureFailure: OperationSchema.optional(),
        reportCaptureFailureImpl: SequentialWorkflowOperationSchema.optional(),
        reportCardTransaction: OperationSchema.optional(),
        reportCardTransactionImpl: SequentialWorkflowOperationSchema.optional(),
        reportReservationDeclined: OperationSchema.optional(),
        reportReservationDeclinedImpl:
          SequentialWorkflowOperationSchema.optional(),
        reportReservationReleaseDeclined: OperationSchema.optional(),
        reportReservationReleaseDeclinedImpl:
          SequentialWorkflowOperationSchema.optional(),
        requestMonitoringConsentOnInit: SequentialWorkflowSchema.optional(),
      })
      .optional(),
    description: z.string().optional(),
    monitoringRejectedAt: z.number().optional(),
    monitoringRejectionReason: z.string().optional(),
    monitoringStartedAt: z.number().optional(),
    monitoringStatus: z.string().optional(),
    name: z.string().optional(),
    paidOutAmountMinor: z.number().optional(),
    remainingAmountMinor: z.number().optional(),
    reportedTransactionsById: z
      .record(z.string(), CardTransactionReportSchema)
      .optional(),
    status: DocumentStatusSchema.optional(),
    terminatedAt: z.number().optional(),
    voucher: z
      .object({
        description: z.string().optional(),
        issuerMerchantId: z.string().optional(),
        limitMinor: z.number().optional(),
        targetMerchantId: z.string().optional(),
      })
      .optional(),
    voucherCashbackCaptureByTransactionId: z
      .record(
        z.string(),
        z.object({
          capturedAmountMinor: z.number().optional(),
          description: z.string().optional(),
          failureReason: z.string().optional(),
          name: z.string().optional(),
          requestedAmountMinor: z.number().optional(),
          status: z.string().optional(),
        })
      )
      .optional(),
  })
);

export type PayNoteVoucher = z.infer<typeof PayNoteVoucherSchema>;
