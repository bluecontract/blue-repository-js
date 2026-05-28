import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { OperationSchema } from '../../coordination/schemas/Operation';
import { SequentialWorkflowSchema } from '../../coordination/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../coordination/schemas/SequentialWorkflowOperation';
import { ChannelSchema } from '../../core/schemas/Channel';
import { LifecycleEventChannelSchema } from '../../core/schemas/LifecycleEventChannel';
import { SearchContractSchema } from '../../myos/schemas/SearchContract';

export const PayNoteSchema = withTypeBlueId(blueIds['PayNote/PayNote'])(
  z.object({
    amount: z
      .object({
        completed: z.number().optional(),
        description: z.string().optional(),
        expectedTotal: z.number().optional(),
        finalResolved: z.number().optional(),
        reversed: z.number().optional(),
        secured: z.number().optional(),
      })
      .optional(),
    contracts: z
      .object({
        acceptPayNote: z.lazy(() => OperationSchema).optional(),
        acceptPayNoteImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        cancelBeforeCompletion: z.lazy(() => OperationSchema).optional(),
        cancelBeforeCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        completePayment: z.lazy(() => OperationSchema).optional(),
        completePaymentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        confirmPayeeAssignment: z.lazy(() => OperationSchema).optional(),
        confirmPayeeAssignmentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        confirmTransactionDetailsUpdated: z
          .lazy(() => OperationSchema)
          .optional(),
        confirmTransactionDetailsUpdatedImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineCancelBeforeCompletion: z.lazy(() => OperationSchema).optional(),
        declineCancelBeforeCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineCompletePayment: z.lazy(() => OperationSchema).optional(),
        declineCompletePaymentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineReverseAfterCompletion: z.lazy(() => OperationSchema).optional(),
        declineReverseAfterCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        declineSecureFunds: z.lazy(() => OperationSchema).optional(),
        declineSecureFundsImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failCancelBeforeCompletion: z.lazy(() => OperationSchema).optional(),
        failCancelBeforeCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failCompletePayment: z.lazy(() => OperationSchema).optional(),
        failCompletePaymentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failPaymentCompletionLockChange: z
          .lazy(() => OperationSchema)
          .optional(),
        failPaymentCompletionLockChangeImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failPaymentReversalLockChange: z.lazy(() => OperationSchema).optional(),
        failPaymentReversalLockChangeImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failReverseAfterCompletion: z.lazy(() => OperationSchema).optional(),
        failReverseAfterCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failSecureFunds: z.lazy(() => OperationSchema).optional(),
        failSecureFundsImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failTransactionDetailsUpdate: z.lazy(() => OperationSchema).optional(),
        failTransactionDetailsUpdateImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        failTransactionDetailsUpdateLockChange: z
          .lazy(() => OperationSchema)
          .optional(),
        failTransactionDetailsUpdateLockChangeImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        guarantorChannel: z.lazy(() => ChannelSchema).optional(),
        initialize: z.lazy(() => SequentialWorkflowSchema).optional(),
        initLifecycleChannel: z
          .lazy(() => LifecycleEventChannelSchema)
          .optional(),
        lockPaymentCompletion: z.lazy(() => OperationSchema).optional(),
        lockPaymentCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        lockPaymentReversal: z.lazy(() => OperationSchema).optional(),
        lockPaymentReversalImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        lockTransactionDetailsUpdate: z.lazy(() => OperationSchema).optional(),
        lockTransactionDetailsUpdateImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        payeeChannel: z.lazy(() => ChannelSchema).optional(),
        payerChannel: z.lazy(() => ChannelSchema).optional(),
        recordTransactionInitiated: z.lazy(() => OperationSchema).optional(),
        recordTransactionInitiatedImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        recordTransactionInitiationFailed: z
          .lazy(() => OperationSchema)
          .optional(),
        recordTransactionInitiationFailedImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectFinalAmountResolution: z.lazy(() => OperationSchema).optional(),
        rejectFinalAmountResolutionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectPayeeAssignment: z.lazy(() => OperationSchema).optional(),
        rejectPayeeAssignmentImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectPayNote: z.lazy(() => OperationSchema).optional(),
        rejectPayNoteImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        rejectTransactionDetailsUpdate: z
          .lazy(() => OperationSchema)
          .optional(),
        rejectTransactionDetailsUpdateImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        resolveFinalAmount: z.lazy(() => OperationSchema).optional(),
        resolveFinalAmountImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        reverseAfterCompletion: z.lazy(() => OperationSchema).optional(),
        reverseAfterCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        search: z.lazy(() => SearchContractSchema).optional(),
        secureFunds: z.lazy(() => OperationSchema).optional(),
        secureFundsImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockPaymentCompletion: z.lazy(() => OperationSchema).optional(),
        unlockPaymentCompletionImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockPaymentReversal: z.lazy(() => OperationSchema).optional(),
        unlockPaymentReversalImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
        unlockTransactionDetailsUpdate: z
          .lazy(() => OperationSchema)
          .optional(),
        unlockTransactionDetailsUpdateImpl: z
          .lazy(() => SequentialWorkflowOperationSchema)
          .optional(),
      })
      .optional(),
    controls: z
      .object({
        completionLocked: z.boolean().optional(),
        reversalLocked: z.boolean().optional(),
        transactionDetailsUpdateLocked: z.boolean().optional(),
      })
      .optional(),
    currency: z.lazy(() => CurrencySchema).optional(),
    description: z.string().optional(),
    kind: z.string().optional(),
    name: z.string().optional(),
    payNoteInitialStateDescription: z
      .object({
        details: z.string().optional(),
        summary: z.string().optional(),
      })
      .optional(),
    status: z.string().optional(),
    transactionDetails: blueNodeField().optional(),
  })
);

export type PayNote = z.infer<typeof PayNoteSchema>;
