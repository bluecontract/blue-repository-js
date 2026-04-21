import { z } from 'zod';
import { blueIds } from '../blue-ids';
import { withTypeBlueId, blueNodeField } from '@blue-labs/language';
import { CurrencySchema } from '../../common/schemas/Currency';
import { OperationSchema } from '../../conversation/schemas/Operation';
import { SequentialWorkflowSchema } from '../../conversation/schemas/SequentialWorkflow';
import { SequentialWorkflowOperationSchema } from '../../conversation/schemas/SequentialWorkflowOperation';
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
        acceptPayNote: OperationSchema.optional(),
        acceptPayNoteImpl: SequentialWorkflowOperationSchema.optional(),
        cancelBeforeCompletion: OperationSchema.optional(),
        cancelBeforeCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        completePayment: OperationSchema.optional(),
        completePaymentImpl: SequentialWorkflowOperationSchema.optional(),
        confirmPayeeAssignment: OperationSchema.optional(),
        confirmPayeeAssignmentImpl:
          SequentialWorkflowOperationSchema.optional(),
        confirmTransactionDetailsUpdated: OperationSchema.optional(),
        confirmTransactionDetailsUpdatedImpl:
          SequentialWorkflowOperationSchema.optional(),
        declineCancelBeforeCompletion: OperationSchema.optional(),
        declineCancelBeforeCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        declineCompletePayment: OperationSchema.optional(),
        declineCompletePaymentImpl:
          SequentialWorkflowOperationSchema.optional(),
        declineReverseAfterCompletion: OperationSchema.optional(),
        declineReverseAfterCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        declineSecureFunds: OperationSchema.optional(),
        declineSecureFundsImpl: SequentialWorkflowOperationSchema.optional(),
        failCancelBeforeCompletion: OperationSchema.optional(),
        failCancelBeforeCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        failCompletePayment: OperationSchema.optional(),
        failCompletePaymentImpl: SequentialWorkflowOperationSchema.optional(),
        failPaymentCompletionLockChange: OperationSchema.optional(),
        failPaymentCompletionLockChangeImpl:
          SequentialWorkflowOperationSchema.optional(),
        failPaymentReversalLockChange: OperationSchema.optional(),
        failPaymentReversalLockChangeImpl:
          SequentialWorkflowOperationSchema.optional(),
        failReverseAfterCompletion: OperationSchema.optional(),
        failReverseAfterCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        failSecureFunds: OperationSchema.optional(),
        failSecureFundsImpl: SequentialWorkflowOperationSchema.optional(),
        failTransactionDetailsUpdate: OperationSchema.optional(),
        failTransactionDetailsUpdateImpl:
          SequentialWorkflowOperationSchema.optional(),
        failTransactionDetailsUpdateLockChange: OperationSchema.optional(),
        failTransactionDetailsUpdateLockChangeImpl:
          SequentialWorkflowOperationSchema.optional(),
        guarantorChannel: ChannelSchema.optional(),
        initialize: SequentialWorkflowSchema.optional(),
        initLifecycleChannel: LifecycleEventChannelSchema.optional(),
        lockPaymentCompletion: OperationSchema.optional(),
        lockPaymentCompletionImpl: SequentialWorkflowOperationSchema.optional(),
        lockPaymentReversal: OperationSchema.optional(),
        lockPaymentReversalImpl: SequentialWorkflowOperationSchema.optional(),
        lockTransactionDetailsUpdate: OperationSchema.optional(),
        lockTransactionDetailsUpdateImpl:
          SequentialWorkflowOperationSchema.optional(),
        payeeChannel: ChannelSchema.optional(),
        payerChannel: ChannelSchema.optional(),
        recordTransactionInitiated: OperationSchema.optional(),
        recordTransactionInitiatedImpl:
          SequentialWorkflowOperationSchema.optional(),
        recordTransactionInitiationFailed: OperationSchema.optional(),
        recordTransactionInitiationFailedImpl:
          SequentialWorkflowOperationSchema.optional(),
        rejectFinalAmountResolution: OperationSchema.optional(),
        rejectFinalAmountResolutionImpl:
          SequentialWorkflowOperationSchema.optional(),
        rejectPayeeAssignment: OperationSchema.optional(),
        rejectPayeeAssignmentImpl: SequentialWorkflowOperationSchema.optional(),
        rejectPayNote: OperationSchema.optional(),
        rejectPayNoteImpl: SequentialWorkflowOperationSchema.optional(),
        rejectTransactionDetailsUpdate: OperationSchema.optional(),
        rejectTransactionDetailsUpdateImpl:
          SequentialWorkflowOperationSchema.optional(),
        resolveFinalAmount: OperationSchema.optional(),
        resolveFinalAmountImpl: SequentialWorkflowOperationSchema.optional(),
        reverseAfterCompletion: OperationSchema.optional(),
        reverseAfterCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        search: SearchContractSchema.optional(),
        secureFunds: OperationSchema.optional(),
        secureFundsImpl: SequentialWorkflowOperationSchema.optional(),
        unlockPaymentCompletion: OperationSchema.optional(),
        unlockPaymentCompletionImpl:
          SequentialWorkflowOperationSchema.optional(),
        unlockPaymentReversal: OperationSchema.optional(),
        unlockPaymentReversalImpl: SequentialWorkflowOperationSchema.optional(),
        unlockTransactionDetailsUpdate: OperationSchema.optional(),
        unlockTransactionDetailsUpdateImpl:
          SequentialWorkflowOperationSchema.optional(),
      })
      .optional(),
    controls: z
      .object({
        completionLocked: z.boolean().optional(),
        reversalLocked: z.boolean().optional(),
        transactionDetailsUpdateLocked: z.boolean().optional(),
      })
      .optional(),
    currency: CurrencySchema.optional(),
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
